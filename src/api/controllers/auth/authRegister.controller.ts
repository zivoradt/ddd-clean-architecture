import HTTP_STATUS  from "http-status-codes";
import {BaseController} from '../../../domain/core/infra/BaseController';
import { AuthResult, IServices } from '@root/domain/core/application/IServices';
import { RegisterRequest } from "@root/application/dto/Auth/registerDto";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthRegisterController extends BaseController{
   
    constructor(@inject("IServices") protected authService: IServices) {
        super();
    }

    protected async executeImpl(): Promise<void> {
        try {
            const dto: RegisterRequest = this.req.body as RegisterRequest;

            
            const authResult: AuthResult = await this.authService.register(dto.FirstName, dto.LastName, dto.Email, dto.Password);
            

            this.res.status(HTTP_STATUS.OK).json({ message: 'User is registered', dto: authResult });
        } catch (error) {
            this.res.json({ message: 'Something went wrong', error: error });
        }
    }

        
}

    

