
import { MenuRequestDto } from "@root/application/Services/Menu/common/MenuRequestDto";
import { BaseController } from "@root/domain/core/infra/BaseController";
import { Mediator } from "@root/mediator/Mediator";
import HTTP_STATUS from 'http-status-codes';
import { inject, injectable } from "tsyringe";

@injectable()
export class MenuContorller extends BaseController{

    constructor(@inject("Mediator") protected mediator: Mediator) {
        super();
    }
    public executeImpl(): void {

        const menuRequest: MenuRequestDto = this.req.body;

        const hostId: string = this.req.params;

        const command = this.mediator.send()

        this.res.status(HTTP_STATUS.OK).json({message: menuRequest})
    }
}