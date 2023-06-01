import { IJwtTokenDto } from './IJwtTokenDto';

export interface AuthResult{
    id: string,
    FirstName: string,
    LastName: string,
    Email: string,
    Token: string
}

export interface AuthPayload{
    id: string,
    FirstName: string,
    LastName: string,
}
