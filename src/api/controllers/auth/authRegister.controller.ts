
import HTTP_STATUS from "http-status-codes";
import { BaseController } from '../../../domain/core/infra/BaseController'
import { inject, injectable } from "tsyringe";
import { IAuthCommandServices } from "@root/application/Services/Auth/commands/IAuthCommandServices";
import { RegisterRequest } from "@root/application/Services/Auth/common/registerDto";



@injectable()
export class AuthRegisterController extends BaseController {
    
    
    constructor(
                @inject("IAuthCommandServices") protected authCommandService: IAuthCommandServices) {
        super();
    }

    protected async executeImpl(): Promise<any> {
        try {
            const registerRequest: RegisterRequest = this.req.body as RegisterRequest;
           
            const authResult = await this.authCommandService.register(registerRequest);

            const token: string = authResult.Token;

            
            

            this.req.session = {jwt: token};
              
            
            this.res.status(HTTP_STATUS.OK).json({ message: 'User is registered', ...authResult });
        } catch (error) {
            this.next(error);
        }
    }

    
}




