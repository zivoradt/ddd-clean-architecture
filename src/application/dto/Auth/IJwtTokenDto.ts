import { AuthPayload } from '../../Services/Auth/common/IAuthResultDto';


export interface IJwtTokenDto{
    issuer: string,
    audience: string,
    expire: Date,
    payload: AuthPayload,

}