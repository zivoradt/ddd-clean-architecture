import { RegisterRequest } from "../common/registerDto";



export interface IAuthCommandServices{

    register (registerRequest: RegisterRequest): any;
};