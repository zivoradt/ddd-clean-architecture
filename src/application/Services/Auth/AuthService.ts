import { IJwtTokenGenerator } from '@appliciation/common/interface/authentification/IJwtTokenGenerator';
import {  IServices } from "@root/domain/core/application/IServices";
import { AuthResult } from '@root/application/dto/Auth/IAuthResultDto';
import { inject, injectable } from "tsyringe";
import {v4 as uuidv4} from 'uuid';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';
import { User } from '@root/domain/entities/user';
import { UserRepository } from '@root/infrastructure/persistance/UserRepository';
import { BadRequest, BaseError } from '@root/global/BaseError';

@injectable()
export class AuthService implements IServices{
    private readonly jwtTokenGenerator: IJwtTokenGenerator;
    private readonly userRepository: IUserRepository;
    constructor(@inject('IJwtTokenGenerator')jwtTokenGenerator: IJwtTokenGenerator,@inject('IUserRepository') userRepository: IUserRepository) {
        this.jwtTokenGenerator = jwtTokenGenerator
        this.userRepository = userRepository;
    }


    public async register(FirstName: string, LastName: string, Email: string, Password: string ): Promise<AuthResult> {


        const userOrNull = await this.userRepository.getUserByEmail(Email);

        if(userOrNull != null){
            throw new BadRequest("User already exist")
        }

        const userId = uuidv4();

        const newUser = new User(FirstName, LastName, Email, Password, userId);

        const token: string = await this.jwtTokenGenerator.generateToken(newUser);

        await this.userRepository.add(newUser);

        
            const dto: AuthResult = {
                User: newUser,
                Token: token
   
            }
            //return dto as AuthResult;
            return dto as AuthResult;
        
    }

    public async login(Email: string, Password: string):Promise<any> {


        const userOrNull = await this.userRepository.getUserByEmail(Email);


        if(userOrNull == null){
            
            
            throw new BadRequest('User with this email dont exist');
        }

        if(userOrNull.Password != Password){
            throw new BadRequest('Password is incorect!');
        }

        const token: string = await this.jwtTokenGenerator.generateToken(userOrNull!);
            
            const dto: AuthResult = {
                User: userOrNull,
                Token: token 
            }
            return dto as AuthResult;
        
    }
}
