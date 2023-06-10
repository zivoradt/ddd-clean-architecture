import HTTP_STATUS from "http-status-codes";
import { BaseController } from '../../../domain/core/infra/BaseController'
import { inject, injectable } from "tsyringe";
import { LoginRequest } from "@root/application/Services/Auth/common/loginDto";
import { Mediator } from "@root/mediator/Mediator";
import { LoginRequestt } from "@root/mediator/auth/request/LoginRequest";



@injectable()
export class AuthLoginController extends BaseController {
    
    
    constructor(
        @inject('Mediator') protected mediator: Mediator) {
        super();
    }

    protected async executeImpl(): Promise<any> {
        try {
            const loginRequest: LoginRequest = this.req.body as LoginRequest;

           const loginRequestt = new LoginRequestt(loginRequest)
            const authResult = await this.mediator.send(loginRequestt);

            this.req.session = {jwt: authResult.Token};
              
            
            this.res.status(HTTP_STATUS.OK).json({ message: 'User is loged in', ...authResult });
        } catch (error) {
            this.next(error);
        }
    }

    
}




