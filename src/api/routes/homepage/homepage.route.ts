import {  HomepageController } from 'src/api/controllers/homepage/homepageController';
import { BaseRouter } from '../../../domain/core/infra/BaseRouter';
import { Router } from 'express';


export class HomepageRouter extends BaseRouter{
    
    constructor() {
        super();
    }

    public routes():Router{

        this.router.get('/get', (req, res)=>HomepageController.prototype.execute(req, res))
        

        return this.router;
    }

}

export const homepageRouter: HomepageRouter = new HomepageRouter();