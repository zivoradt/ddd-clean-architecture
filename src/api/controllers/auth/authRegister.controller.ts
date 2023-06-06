import { IJwtTokenDto } from './../../../application/dto/Auth/IJwtTokenDto';
import HTTP_STATUS  from "http-status-codes";
import {BaseController} from '../../../domain/core/infra/BaseController';
import { IServices } from '@root/domain/core/application/IServices';
import { AuthResult } from "@root/application/dto/Auth/IAuthResultDto";
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
            const token: string = authResult.Token;
            

            this.req.session = {jwt: token};

            this.res.status(HTTP_STATUS.OK).json({ message: 'User is registerd', ...authResult });
        } catch (error) {
            
            this.next(error);
        }
    }

        
}

    

