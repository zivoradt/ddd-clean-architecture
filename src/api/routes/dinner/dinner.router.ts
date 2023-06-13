import { Router } from 'express';
import { DinnerContorller } from '../../controllers/dinner/dinner.controller';
import { BaseRouter } from '@root/domain/core/infra/BaseRouter';
import { diContainer } from '@root/dependencies/dependencies';
import { AuthMiddleware } from '@root/global/authentificationMiddleware/AuthMiddleware';



export class DinnerRouter extends BaseRouter{
    protected dinnerContorller: DinnerContorller;
    
    constructor() {
        super();
        
        this.dinnerContorller = diContainer.dinner.resolve<DinnerContorller>(DinnerContorller);
    }

    public routes():Router{

        this.router.get('/dinner', AuthMiddleware.prototype.checkAuthorization, (req, res, next)=>this.dinnerContorller.execute(req, res, next));

        return this.router;
    }

}

export const dinnerRouter: DinnerRouter = new DinnerRouter();