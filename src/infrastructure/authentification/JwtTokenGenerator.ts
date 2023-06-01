import { IJwtTokenDto } from './../../application/dto/Auth/IJwtTokenDto';
import { config } from '@root/config';
import { IJwtTokenGenerator } from '@appliciation/common/interface/authentification/IJwtTokenGenerator';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { injectable } from 'tsyringe';

@injectable()
export class JwtTokenGenerator implements IJwtTokenGenerator{

    constructor() {
        
    }

    public generateToken(userId: string, firstName: string, lastName: string): string {
        
        
        const tokenDto : IJwtTokenDto = {
            issuer: "",
            audience: "",
            expire: new Date(),
            payload: {
                id: userId,
                FirstName: firstName,
                LastName: lastName
            }

        };

        const token = jwt.sign(tokenDto, config.SECRET_JWT!);
       
        return token;
    }
}