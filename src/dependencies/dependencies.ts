import 'reflect-metadata';
import { AuthCommandService } from '@root/application/Services/Auth/commands/AuthCommandService';
import {container,  DependencyContainer} from 'tsyringe';
import { JwtTokenGenerator } from '@root/infrastructure/authentification/JwtTokenGenerator';
import { JwtSettings } from '../infrastructure/authentification/JwtSettings';
import { DateTimeProvider } from '@root/infrastructure/services/DateTimeProvider';
import { UserRepository } from '@root/infrastructure/persistance/UserRepository';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';
import { AuthQueryService } from '@root/application/Services/Auth/queries/AuthQueryService';



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
        
        this.authLoginController.register('IAuthQueryServices', { useClass: AuthQueryService});

        this.registerController.registerSingleton<IUserRepository>('IUserRepository', UserRepository);
        this.registerController.register('DateProvider', {useClass: DateTimeProvider});
        this.registerController.register('JwtSettings', {useClass: JwtSettings})
        this.registerController.register('IJwtTokenGenerator', {useClass: JwtTokenGenerator});
        this.registerController.register('IAuthCommandServices', { useClass: AuthCommandService});
    }

}

export const diContainer: Dependencies = new Dependencies(_container);


