import { IJwtTokenGenerator } from "@root/application/common/interface/authentification/IJwtTokenGenerator";
import { RegisterRequestt } from "../request/RegisterRequest";
import { IRequestHandler } from "../../interfaces/IRequestHandler";
import { IUserRepository } from "@root/application/common/interface/persistance/IUserRepository";
import { inject, injectable } from "tsyringe";
import { BadRequest } from "@root/global/errorMiddleware/BaseError";
import { AuthResult } from "@root/application/Services/Auth/common/IAuthResultDto";
import { LoginRequestt } from "../request/LoginRequest";

@injectable()
export class LoginHandler implements IRequestHandler<RegisterRequestt>{
  private readonly jwtTokenGenerator: IJwtTokenGenerator;
  private readonly userRepository: IUserRepository;
  constructor(
    @inject("IJwtTokenGenerator") jwtTokenGenerator: IJwtTokenGenerator,
    @inject("IUserRepository") userRepository: IUserRepository
  ) {
    this.jwtTokenGenerator = jwtTokenGenerator;
    this.userRepository = userRepository;
  }

  public async handle(loginRequest: LoginRequestt): Promise<any> {
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

