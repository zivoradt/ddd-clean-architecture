import HTTP_STATUS  from "http-status-codes";
import {BaseController} from '../../../domain/core/infra/BaseController';
import { AuthResult, IServices } from '@root/domain/core/application/IServices';
import { RegisterRequest } from "@root/application/dto/Auth/registerDto";


export class AuthRegisterController extends BaseController{
   
    private authService: IServices
    constructor(authService: IServices){
        super()
        this.authService = authService;
    }

    protected async executeImpl(): Promise<void> {
        try {
            const dto: RegisterRequest = this.req.body as RegisterRequest;

            
            const authResult: AuthResult = await this.authService.register(dto.FirstName, dto.LastName, dto.Email, dto.Password);
            

            this.res.status(HTTP_STATUS.OK).json({ message: 'User is logged in', dto: authResult });
        } catch (error) {
            this.res.json({ message: 'Something went wrong', error: error });
        }
    }

        
}

    

