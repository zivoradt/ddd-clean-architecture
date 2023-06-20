import { IJwtTokenGenerator } from "@root/application/common/interface/authentification/IJwtTokenGenerator";
import { RegisterRequestt } from "../request/RegisterRequest";
import { IRequestHandler } from "../../interfaces/IRequestHandler";
import { IUserRepository } from "@root/application/common/interface/persistance/IUserRepository";
import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";
import { BadRequest } from "@root/global/errorMiddleware/BaseError";
import { User } from "@root/domain/entities/user";
import { AuthResult } from "@root/application/Services/Auth/common/IAuthResultDto";
import { RegisterRequest } from "@root/application/Services/Auth/common/registerDto";
import { Mapping } from "@root/api/common/mapping/AuthentificationMapping";

const mapper = new Mapping;

@injectable()
export class RegisterHandler implements IRequestHandler<RegisterRequestt>{
    private readonly jwtTokenGenerator: IJwtTokenGenerator;
  private readonly userRepository: IUserRepository;
  constructor(
    @inject("IJwtTokenGenerator") jwtTokenGenerator: IJwtTokenGenerator,
    @inject("IUserRepository") userRepository: IUserRepository
  ) {
    this.jwtTokenGenerator = jwtTokenGenerator;
    this.userRepository = userRepository;
  }

  public async handle(request: RegisterRequest): Promise<any> {
       const userOrNull = await this.userRepository.getUserByEmail(
        request.Email
      ); 
  
      
      if (userOrNull != null) {
        throw new BadRequest("User already exist");
      }  
  
      const userId =  uuidv4();
  
      const newUser = new User(
        request.FirstName,
        request.LastName,
        request.Email,
        request.Password,
        userId
      );
  
      const token: string = await this.jwtTokenGenerator.generateToken(newUser);

      const newmap = new Mapping
      await this.userRepository.add(newUser);

      const authResult: AuthResult = newmap.authResultMap(newUser, token)


      return authResult;
  }
}

