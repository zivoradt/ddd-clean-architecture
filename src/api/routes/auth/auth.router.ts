import { container } from 'tsyringe';
import {  diContainer } from '@dependencies/dependencies';
import { BaseRouter } from '@baseInfra/BaseRouter';
import { Router } from 'express';
import { AuthLoginController } from '@root/api/controllers/auth/authLogin.controller';
import { AuthRegisterController } from '@root/api/controllers/auth/authRegister.controller';


const cont = container
export class AuthRouter extends BaseRouter{
    protected loginController: AuthLoginController;
    protected registerController: AuthRegisterController;
    constructor() {
        super();
        
        this.loginController = diContainer.authLoginController.resolve<AuthLoginController>(AuthLoginController);
        this.registerController = diContainer.registerController.resolve(AuthRegisterController);
    }

    public routes():Router{

        this.router.post('/register', (req, res)=>this.registerController.execute(req, res));
        this.router.post('/login', (req, res)=>this.loginController.execute(req, res));

        return this.router;
    }

}

export const authRouter: AuthRouter = new AuthRouter();