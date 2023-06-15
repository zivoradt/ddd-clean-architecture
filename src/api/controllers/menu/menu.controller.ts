
import { Mapping } from "@root/api/common/mapping/AuthentificationMapping";
import { MenuRequestDto } from "@root/application/Services/Menu/common/MenuRequestDto";
import { BaseController } from "@root/domain/core/infra/BaseController";
import { Mediator } from "@root/mediator/Mediator";
import { CreateMenuCommand } from "@root/mediator/menu/request/CreateMenuCommand";
import HTTP_STATUS from 'http-status-codes';
import { inject, injectable } from "tsyringe";

@injectable()
export class MenuContorller extends BaseController{

    constructor(@inject("Mediator") protected mediator: Mediator) {
        super();
    }
    public async executeImpl(): Promise<void> {

        const mapper = new Mapping();

       const requestFromUser: MenuRequestDto = mapper.fromRequestBodyToMenuRequestDto(this.req);

        const {hostId} = this.req.params;

        const menuCommand: CreateMenuCommand = mapper.createMenuCommand(requestFromUser, hostId);

        
        const createdMenuOrNull = await this.mediator.send(menuCommand);

        

        //const command = this.mediator.send()

        this.res.status(HTTP_STATUS.OK).json({message: requestFromUser})
    }
}