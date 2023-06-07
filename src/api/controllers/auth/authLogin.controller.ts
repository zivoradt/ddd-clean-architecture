import HTTP_STATUS from "http-status-codes";
import { BaseController } from '../../../domain/core/infra/BaseController'
import { inject, injectable } from "tsyringe";
import { IAuthQueryServices } from "@root/application/Services/Auth/queries/IAuthQueryServices";
import { LoginRequest } from "@root/application/Services/Auth/common/loginDto";



@injectable()
export class AuthLoginController extends BaseController {
    
    
    constructor(
                @inject("IAuthQueryServices") protected authQueryService: IAuthQueryServices) {
        super();
    }

    protected async executeImpl(): Promise<any> {
        try {
            const loginRequest: LoginRequest = this.req.body as LoginRequest;
           
            const authResult = await this.authQueryService.login(loginRequest);

            const token: string = authResult.Token;
            

            this.req.session = {jwt: token};
              
            
            this.res.status(HTTP_STATUS.OK).json({ message: 'User is logedin', ...authResult });
        } catch (error) {
            this.next(error);
        }
    }

    
}




