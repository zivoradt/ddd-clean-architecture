import HTTP_STATUS from "http-status-codes";
import { BaseController } from '../../../domain/core/infra/BaseController'
import { LoginRequest } from "@root/application/dto/Auth/loginDto";
import {  IServices } from "@root/domain/core/application/IServices";
import { AuthService } from "@root/application/Services/Auth/AuthService";
import { inject, injectable } from "tsyringe";



@injectable()
export class AuthLoginController extends BaseController {
    

    constructor(@inject("IServices") protected authService: IServices) {
        super();
    }

    protected async executeImpl(): Promise<any> {
        try {
            const dto: LoginRequest = this.req.body as LoginRequest;
           
            const authResult = await this.authService.login(dto.Email, dto.Password);
              

            return this.res.status(HTTP_STATUS.OK).json({ message: 'User is logged in', dto: authResult });
        } catch (error) {
            this.res.json({ message: 'Something went wrong', error: error });
        }
    }
}


