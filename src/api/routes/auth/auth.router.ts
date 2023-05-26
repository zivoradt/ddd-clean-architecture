import {  AuthRegisterController } from '@root/api/controllers/auth/authRegister.controller';
import { BaseRouter } from '../../../domain/core/infra/BaseRouter';
import { Router } from 'express';
import { AuthLoginController } from '@root/api/controllers/auth/authLogin.controller';


export class AuthRouter extends BaseRouter{
    
    constructor() {
        super();
    }

    public routes():Router{

        this.router.post('/register', (req, res)=> AuthRegisterController.prototype.execute(req, res));
        this.router.post('/login', (req, res)=>AuthLoginController.prototype.execute(req, res));

        return this.router;
    }

}

export const authRouter: AuthRouter = new AuthRouter();