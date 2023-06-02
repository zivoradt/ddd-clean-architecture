import { IJwtTokenGenerator } from '@appliciation/common/interface/authentification/IJwtTokenGenerator';
import {  IServices } from "@root/domain/core/application/IServices";
import { AuthResult } from '@root/application/dto/Auth/IAuthResultDto';
import { inject, injectable } from "tsyringe";
import {v4 as uuidv4} from 'uuid';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';
import { User } from '@root/domain/entities/user';

@injectable()
export class AuthService implements IServices{
    private readonly jwtTokenGenerator: IJwtTokenGenerator;
    private readonly userRepository: IUserRepository;
    constructor(@inject('IJwtTokenGenerator')jwtTokenGenerator: IJwtTokenGenerator, userRepository: IUserRepository) {
        this.jwtTokenGenerator = jwtTokenGenerator
        this.userRepository = userRepository;
    }


    public async register(FirstName: string, LastName: string, Email: string, Password: string ): Promise<AuthResult> {


        const userOrNull = await this.userRepository.getUserByEmail(Email);

        if(userOrNull != null){
            
            throw new Error('User already exist!');
        }

        const userId = uuidv4();

        const newUser = new User(FirstName, LastName, Email, Password, userId);

        const token: string = this.jwtTokenGenerator.generateToken(userId, FirstName, LastName);

        await this.userRepository.add(newUser);

        try {
            const dto: AuthResult = {
                id: userId,
                FirstName: FirstName,
                LastName: LastName,
                Email: Email,
                Token: token
   
            }
            return dto as AuthResult;
        } catch (error) {
           throw new Error('Registration failed');
        }
        ;
    }

    public async login(Email: string, Password: string):Promise<any> {


        const userOrNull = await this.userRepository.getUserByEmail(Email);

        if(userOrNull == null){
            
            throw new Error('User with this email dont exist');
        }

        if(userOrNull.Password != Password){
            throw new Error('Password is incorect!');
        }

        const userId: string = uuidv4();

        const token: string = await this.jwtTokenGenerator.generateToken(userId, userOrNull.FirstName, userOrNull.LastName);

        
        try {
            
            const dto: AuthResult = {
                id: userId,
                FirstName: userOrNull.FirstName,
                LastName: userOrNull.FirstName,
                Email: userOrNull.Email,
                Token: token 
            }
            return dto;
        } catch (error) {
            throw new Error('Login failed');
        }
    }
}
