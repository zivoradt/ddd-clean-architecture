import HTTP_STATUS from "http-status-codes";
import { BaseController } from '../../../domain/core/infra/BaseController'
import { inject, injectable } from "tsyringe";
import { IAuthCommandServices } from "@root/application/Services/Auth/commands/IAuthCommandServices";
import { RegisterRequest } from "@root/application/Services/Auth/common/registerDto";
import { IAuthQueryServices } from "@root/application/Services/Auth/queries/IAuthQueryServices";
import { NextFunction } from "express-serve-static-core";



@injectable()
export class AuthentificationController extends BaseController {
    
    constructor(@inject("IAuthCommandServices") protected authCommandService: IAuthCommandServices,
                @inject("IAuthQueryServices") protected authQueryService: IAuthQueryServices) {
        super();
    }

    protected async register(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const dto: RegisterRequest = this.req.body as RegisterRequest;
           
            const authResult = await this.authCommandService.register(dto.FirstName, dto.LastName ,dto.Email, dto.Password);

            const token: string = authResult.Token;
            

            this.req.session = {jwt: token};
              
            
            this.res.status(HTTP_STATUS.OK).json({ message: 'User is registerd', ...authResult });
        } catch (error) {
            this.next(error);
        }
    }

    
}




