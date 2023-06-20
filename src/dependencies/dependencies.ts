import 'reflect-metadata';
import { AuthCommandService } from '@root/application/Services/Auth/commands/AuthCommandService';
import {container,   DependencyContainer} from 'tsyringe';
import { JwtTokenGenerator } from '@root/infrastructure/authentification/JwtTokenGenerator';
import { JwtSettings } from '../infrastructure/authentification/JwtSettings';
import { DateTimeProvider } from '@root/infrastructure/services/DateTimeProvider';
import { UserRepository } from '@root/infrastructure/persistance/repositories/UserRepository';

import { AuthQueryService } from '@root/application/Services/Auth/queries/AuthQueryService';
import { Mediator } from '@root/mediator/Mediator';
import container1  from 'tsyringe';
import { DinnerContorller } from '@root/api/controllers/dinner/dinner.controller';
import { MenuRepository } from '@root/infrastructure/persistance/repositories/MenuRepository';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';
import { DatabaseConnection } from '@root/databaseSetup';
import { DatabaseContext } from '@root/infrastructure/persistance/DBContext';



let _container = container;


export class Dependencies{
    public registerController: DependencyContainer;
    public authLoginController: DependencyContainer
    public mediator: DependencyContainer;
    public dinner: DependencyContainer;

    constructor(container: DependencyContainer) {
        this.registerController = container;
        this.mediator = container.createChildContainer();
        this.authLoginController = container;
        this.dinner = container.createChildContainer();
        this.diContainer();       
    }


    public diContainer(){

        
        
        this.mediator.registerSingleton('Mediator',  Mediator)
        this.mediator.register('IMenuRepository', {useClass: MenuRepository});
        this.dinner.register('DinnerController', {useClass: DinnerContorller});

        this.authLoginController.register('IAuthQueryServices', { useClass: AuthQueryService});

        this.registerController.registerSingleton<IUserRepository>('IUserRepository', UserRepository);
        this.registerController.registerSingleton<DatabaseConnection>('DatabaseConnection', DatabaseConnection);
        this.registerController.registerSingleton<DatabaseContext>('DatabaseContext', DatabaseContext);
        this.registerController.register('DateProvider', {useClass: DateTimeProvider});
        this.registerController.register('JwtSettings', {useClass: JwtSettings})
        this.registerController.register('IJwtTokenGenerator', {useClass: JwtTokenGenerator});
        this.registerController.register('IAuthCommandServices', { useClass: AuthCommandService});

    }

}

export const diContainer: Dependencies = new Dependencies(_container);


