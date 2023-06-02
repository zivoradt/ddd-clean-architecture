import 'reflect-metadata';
import { AuthLoginController } from '@root/api/controllers/auth/authLogin.controller';
import { AuthService } from '@root/application/Services/Auth/AuthService';
import {container,  DependencyContainer,  InjectionToken} from 'tsyringe';
import { AuthRegisterController } from '@root/api/controllers/auth/authRegister.controller';
import { JwtTokenGenerator } from '@root/infrastructure/authentification/JwtTokenGenerator';
import { JwtSettings } from '../infrastructure/authentification/JwtSettings';
import { DateTimeProvider } from '@root/infrastructure/services/DateTimeProvider';



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
        
        this.registerController.register('IUserRepository', {useClass: })
        this.registerController.register('DateProvider', {useClass: DateTimeProvider});
        this.registerController.register('JwtSettings', {useClass: JwtSettings})
        this.registerController.register('IJwtTokenGenerator', {useClass: JwtTokenGenerator});
        this.registerController.register('IServices', { useClass: AuthService});
    }

}

export const diContainer: Dependencies = new Dependencies(_container);


