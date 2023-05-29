import { config } from '@root/config';
import { IJwtTokenGenerator } from '@appliciation/common/interface/authentification/IJwtTokenGenerator';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { injectable } from 'tsyringe';

@injectable()
export class JwtTokenGenerator implements IJwtTokenGenerator{


    public generateToken(userId: string, firstName: string, lastName: string): string {
        
        
        const payload = {
            userId: userId,
            firstName: firstName,
            lastName: lastName

        };

        const token = jwt.sign({payload}, config.SECRET_JWT!);
       
        return token;
    }
}