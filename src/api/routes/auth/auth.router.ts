import {  AuthRegisterController } from '@root/api/controllers/auth/authRegister.controller';
import { BaseRouter } from '../../../domain/core/infra/BaseRouter';
import { Router } from 'express';
import { AuthLoginController } from '@root/api/controllers/auth/authLogin.controller';
import { BaseController } from '@root/domain/core/infra/BaseController';
import { login } from '@root/dependencies/dependencies';


export class AuthRouter extends BaseRouter{
    protected controller: BaseController;
    constructor() {
        super();
        this.controller = login();
        
    }

    public routes():Router{

        this.router.post('/register', (req, res)=>AuthRegisterController.prototype.execute(req, res));
        this.router.post('/login', (req, res)=>this.controller.execute(req, res));

        return this.router;
    }

}

export const authRouter: AuthRouter = new AuthRouter();