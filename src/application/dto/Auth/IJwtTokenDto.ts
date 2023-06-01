import { AuthPayload } from './IAuthResultDto';


export interface IJwtTokenDto{
    issuer: string,
    audience: string,
    expire: Date,
    payload: AuthPayload,

}