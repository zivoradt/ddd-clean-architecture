import { IJwtTokenGenerator } from "@appliciation/common/interface/authentification/IJwtTokenGenerator";
import { AuthResult } from "@root/application/Services/Auth/common/IAuthResultDto";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@root/application/common/interface/persistance/IUserRepository";
import { BadRequest, BaseError } from "@root/global/BaseError";
import { IAuthQueryServices } from "./IAuthQueryServices";
import { LoginRequest } from "../common/loginDto";

@injectable()
export class AuthQueryService implements IAuthQueryServices {
  private readonly jwtTokenGenerator: IJwtTokenGenerator;
  private readonly userRepository: IUserRepository;
  constructor(
    @inject("IJwtTokenGenerator") jwtTokenGenerator: IJwtTokenGenerator,
    @inject("IUserRepository") userRepository: IUserRepository
  ) {
    this.jwtTokenGenerator = jwtTokenGenerator;
    this.userRepository = userRepository;
  }

  public async login(loginRequest: LoginRequest): Promise<any> {
    const userOrNull = await this.userRepository.getUserByEmail(
      loginRequest.Email
    );

    if (userOrNull == null) {
      throw new BadRequest("User with this email dont exist");
    }

    if (userOrNull.Password != loginRequest.Password) {
      throw new BadRequest("Password is incorect!");
    }

    const token: string = await this.jwtTokenGenerator.generateToken(
      userOrNull!
    );

    const dto: AuthResult = {
      User: userOrNull,
      Token: token,
    };
    return dto as AuthResult;
  }
}
