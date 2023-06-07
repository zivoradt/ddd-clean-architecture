import { IJwtTokenGenerator } from "@appliciation/common/interface/authentification/IJwtTokenGenerator";
import { AuthResult } from "@root/application/Services/Auth/common/IAuthResultDto";
import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";
import { IUserRepository } from "@root/application/common/interface/persistance/IUserRepository";
import { User } from "@root/domain/entities/user";
import { BadRequest } from "@root/global/BaseError";
import { IAuthCommandServices } from "./IAuthCommandServices";
import { RegisterRequest } from "../common/registerDto";

@injectable()
export class AuthCommandService implements IAuthCommandServices {
  private readonly jwtTokenGenerator: IJwtTokenGenerator;
  private readonly userRepository: IUserRepository;
  constructor(
    @inject("IJwtTokenGenerator") jwtTokenGenerator: IJwtTokenGenerator,
    @inject("IUserRepository") userRepository: IUserRepository
  ) {
    this.jwtTokenGenerator = jwtTokenGenerator;
    this.userRepository = userRepository;
  }

  public async register(registerRequest: RegisterRequest): Promise<AuthResult> {
    const userOrNull = await this.userRepository.getUserByEmail(
      registerRequest.Email
    );

    if (userOrNull != null) {
      throw new BadRequest("User already exist");
    }

    const userId = uuidv4();

    const newUser = new User(
      registerRequest.FirstName,
      registerRequest.LastName,
      registerRequest.Email,
      registerRequest.Password,
      userId
    );

    const token: string = await this.jwtTokenGenerator.generateToken(newUser);

    await this.userRepository.add(newUser);

    const dto: AuthResult = {
      User: newUser,
      Token: token,
    };
    //return dto as AuthResult;
    return dto as AuthResult;
  }
}
