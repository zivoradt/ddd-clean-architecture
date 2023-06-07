import { LoginRequest } from "../common/loginDto";



export interface IAuthQueryServices{

    login (loginRequest: LoginRequest): any;
};