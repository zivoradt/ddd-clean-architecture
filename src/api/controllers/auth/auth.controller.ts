import HTTP_STATUS  from "http-status-codes";
import {BaseController} from '../../../domain/core/infra/BaseController'
import { RegisterRequest } from "@root/application/dto/Auth/registerDto";


export class AuthLoginController extends BaseController{
    

     protected async executeImpl(): Promise<void> {
        try {
            console.log(this.req.body);
         const dto: RegisterRequest = this.req.body as RegisterRequest;

         
            this.res.status(HTTP_STATUS.OK).json({message:'User is registered', dto: dto});
        } catch (error) {
            this.res.status(HTTP_STATUS.BAD_GATEWAY).json({message: 'Something went wrong', error: error});
        }
        
    }
}

