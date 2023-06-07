import { IJwtTokenGenerator } from '@appliciation/common/interface/authentification/IJwtTokenGenerator';
import {  IServices } from "@root/domain/core/application/IServices";
import { AuthResult } from '@root/application/Services/Auth/common/IAuthResultDto';
import { inject, injectable } from "tsyringe";
import {v4 as uuidv4} from 'uuid';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';
import { User } from '@root/domain/entities/user';
import { UserRepository } from '@root/infrastructure/persistance/UserRepository';
import { BadRequest, BaseError } from '@root/global/BaseError';
import { IAuthQueryServices } from './IAuthQueryServices';

@injectable()
export class AuthQueryService implements IAuthQueryServices{
    private readonly jwtTokenGenerator: IJwtTokenGenerator;
    private readonly userRepository: IUserRepository;
    constructor(@inject('IJwtTokenGenerator')jwtTokenGenerator: IJwtTokenGenerator,@inject('IUserRepository') userRepository: IUserRepository) {
        this.jwtTokenGenerator = jwtTokenGenerator
        this.userRepository = userRepository;
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
