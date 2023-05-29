import 'reflect-metadata';
import { AuthLoginController } from '@root/api/controllers/auth/authLogin.controller';
import { AuthService } from '@root/application/Services/Auth/AuthService';
import {container,  DependencyContainer,  InjectionToken} from 'tsyringe';
import { AuthRegisterController } from '@root/api/controllers/auth/authRegister.controller';
import { JwtTokenGenerator } from '@root/infrastructure/authentification/JwtTokenGenerator';

export const login = ()=>{


let loginController: any;
// Register the authService instance
container.register('IServices', { useClass: AuthService});

    return loginController = container.resolve(AuthLoginController);
     
}



let _container = container;
export class Dependencies{
    public registerController: DependencyContainer;
    public authLoginController: DependencyContainer
    constructor(container: DependencyContainer) {
        this.registerController = container;
        this.authLoginController = container;
        this.diContainer();
        
    }

   
    

    public diContainer(){
        
        this.authLoginController.register('IServices', { useClass: AuthService});
        
        this.registerController.register('IJwtTokenGenerator', {useClass: JwtTokenGenerator});
        this.registerController.register('IServices', { useClass: AuthService});
    }

}

export const diContainer: Dependencies = new Dependencies(_container);


