import {  AuthLoginController } from '@root/api/controllers/auth/auth.controller';
import { BaseRouter } from '../../../domain/core/infra/BaseRouter';
import { Router } from 'express';


export class AuthRouter extends BaseRouter{
    
    constructor() {
        super();
    }

    public routes():Router{

        this.router.post('/get', (req, res)=>AuthLoginController.prototype.execute(req, res))
        

        return this.router;
    }

}

export const homepageRouter: AuthRouter = new AuthRouter();