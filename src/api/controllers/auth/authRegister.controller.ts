import { IJwtTokenDto } from './../../../application/dto/Auth/IJwtTokenDto';
import HTTP_STATUS  from "http-status-codes";
import {BaseController} from '../../../domain/core/infra/BaseController';
import { IServices } from '@root/domain/core/application/IServices';
import { AuthResult } from "@root/application/Services/Auth/common/IAuthResultDto";
import { inject, injectable } from "tsyringe";
import { RegisterRequest } from '@root/application/Services/Auth/common/registerDto';
import { Mediator } from '@root/mediator/Mediator';
import { RegisterRequestt } from '@root/mediator/auth/request/RegisterRequest';
import { Mapping } from '@root/api/common/mapping/AuthentificationMapping';


const mappi = new Mapping();
@injectable()
export class AuthRegisterController extends BaseController{
   
    constructor(@inject("Mediator") protected mediator: Mediator) {
        super();
    }

    protected async executeImpl(): Promise<void> {
        try {
            const dto: RegisterRequest = this.req.body as RegisterRequest;

            const registerRequest: RegisterRequestt = new RegisterRequestt(dto);

            const authResult: AuthResult = await this.mediator.send(registerRequest);
        
            this.req.session = {jwt: authResult.Token};

            this.res.status(HTTP_STATUS.OK).json({ message: 'User is registerd', ...authResult });
        } catch (error) {
            
            this.next(error);
        }
    }

        
}

    

