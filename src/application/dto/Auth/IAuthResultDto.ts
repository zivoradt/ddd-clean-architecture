import { User } from '@root/domain/entities/user';
import { IJwtTokenDto } from './IJwtTokenDto';

export interface AuthResult{
    User: User
    Token: string
}

export interface AuthPayload{
    id: string,
    FirstName: string,
    LastName: string,
}
