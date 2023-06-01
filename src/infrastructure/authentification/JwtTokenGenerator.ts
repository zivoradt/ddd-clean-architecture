import { JwtSettings } from './JwtSettings';
import { IJwtTokenDto } from './../../application/dto/Auth/IJwtTokenDto';
import { config } from '@root/config';
import { IJwtTokenGenerator } from '@appliciation/common/interface/authentification/IJwtTokenGenerator';
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { IDateTimeProvider } from '@root/application/common/interface/services/IDateTimeProvider';

@injectable()
export class JwtTokenGenerator implements IJwtTokenGenerator{
    
    private jwtSettings: JwtSettings;
    private dateProvided: IDateTimeProvider;
    constructor(@inject('JwtSettings')JwtSettings: JwtSettings,@inject('DateProvider') dateProvider: IDateTimeProvider) {
        this.jwtSettings = JwtSettings
        this.dateProvided = dateProvider;
    }

    public generateToken(userId: string, firstName: string, lastName: string): string {
        
        
        const tokenDto : IJwtTokenDto = {
            issuer: this.jwtSettings.issuer(),
            audience: this.jwtSettings.audience(),
            expire: this.dateProvided.now(this.jwtSettings.expiryMinutes()),
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