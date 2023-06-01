import { IJwtTokenDto } from './../../dto/Auth/IJwtTokenDto';
import { IJwtTokenGenerator } from '@appliciation/common/interface/authentification/IJwtTokenGenerator';
import {  IServices } from "@root/domain/core/application/IServices";
import { AuthResult } from '@root/application/dto/Auth/IAuthResultDto';
import { inject, injectable } from "tsyringe";
import {v4 as uuidv4} from 'uuid';

@injectable()
export class AuthService implements IServices{
    private readonly jwtTokenGenerator: IJwtTokenGenerator;
    constructor(@inject("IJwtTokenGenerator")jwtTokenGenerator: IJwtTokenGenerator) {
        this.jwtTokenGenerator = jwtTokenGenerator
    }


    public async register(FirstName: string, LastName: string, Email: string, Password: string ): Promise<AuthResult> {

        const userId = uuidv4();

        const token: string = this.jwtTokenGenerator.generateToken(userId, FirstName, LastName);

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

    public login(Email: string, Password: string):any {
        
        try {
            
            const dto: AuthResult = {
                id: "",
                FirstName: "",
                LastName: "",
                Email: Email,
                Token: "" 
            }
            return dto;
        } catch (error) {
            throw new Error('Registration failed');
        }
    }
}
