import { diContainer } from "@root/dependencies/dependencies";
import { Mediator } from "./Mediator";
import { RegisterHandler } from "./auth/handler/RegisterHandler";
import { inject, injectable, singleton } from "tsyringe";
import { LoginHandler } from "./auth/handler/LoginHandler";
import { CreateMenuCommandHandler } from "./menu/handler/CreateMenuCommandHandler";




export class MediatorSystem{
    private mediator: Mediator
    constructor(@inject('Mediator') mediator: Mediator) {
        this.mediator = mediator;
        this.registerHandlers();
    }

    public registerHandlers():void{
        this.mediator.registerHandler('RegisterRequestt', diContainer.mediator.resolve(RegisterHandler));
        this.mediator.registerHandler('LoginRequestt', diContainer.mediator.resolve(LoginHandler))
        this.mediator.registerHandler('CreateMenuCommand', diContainer.mediator.resolve(CreateMenuCommandHandler))
    }

}


