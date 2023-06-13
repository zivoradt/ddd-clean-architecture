import { diContainer } from "@root/dependencies/dependencies";
import { BaseController } from "@root/domain/core/infra/BaseController";
import { JwtTokenGenerator } from "@root/infrastructure/authentification/JwtTokenGenerator";
import HTTP_STATUS from 'http-status-codes';


export class DinnerContorller extends BaseController{

    
    public executeImpl(): void {

        const token = this.req.session?.jwt;

        const jwtt = diContainer.registerController.resolve(JwtTokenGenerator);

        const dekoded = jwtt.exctractPayload(token)

        this.res.status(HTTP_STATUS.OK).json({message: dekoded})
    }
}