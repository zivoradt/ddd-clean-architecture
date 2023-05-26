import 'reflect-metadata';
import { AuthLoginController } from '@root/api/controllers/auth/authLogin.controller';
import { AuthService } from '@root/application/Services/Auth/AuthService';
import {container,  InjectionToken} from 'tsyringe';

export const login = ()=>{


let loginController: AuthLoginController;
// Register the authService instance
container.register('IServices', { useClass: AuthService});


return loginController = container.resolve(AuthLoginController);
  
     
}







