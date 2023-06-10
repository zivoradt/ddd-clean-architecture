import { IRequest } from "../../interfaces/IRequest";
import { LoginRequest } from "@root/application/Services/Auth/common/loginDto";


export class LoginRequestt implements IRequest{
    public Email: string;
    public Password: string;

    constructor(registerRequest: LoginRequest) {
        this.Email = registerRequest.Email,
        this.Password = registerRequest.Password
    }
}