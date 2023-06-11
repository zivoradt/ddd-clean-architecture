import { Router } from 'express';
import { DinnerContorller } from '../../controllers/dinner/dinner.controller';
import { BaseRouter } from '@root/domain/core/infra/BaseRouter';
import { diContainer } from '@root/dependencies/dependencies';



export class DinnerRouter extends BaseRouter{
    protected dinnerContorller: DinnerContorller;
    
    constructor() {
        super();
        
        this.dinnerContorller = diContainer.mediator.resolve<DinnerContorller>(AuthLoginController);
    }

    public routes():Router{

        this.router.get('/dinner', (req, res, next)=>this.dinnerContorller.execute(req, res, next));

        return this.router;
    }

}

export const dinnerRouter: DinnerRouter = new DinnerRouter();