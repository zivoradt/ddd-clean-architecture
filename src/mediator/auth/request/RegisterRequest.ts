import { RegisterRequest } from "@root/application/Services/Auth/common/registerDto";
import { IRequest } from "../../interfaces/IRequest";


export class RegisterRequestt implements IRequest{
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public Password: string;

    constructor(registerRequest: RegisterRequest) {
        this.FirstName = registerRequest.FirstName,
        this.LastName = registerRequest.LastName,
        this.Email = registerRequest.Email,
        this.Password = registerRequest.Password
    }
}