import 'reflect-metadata';
import { AuthLoginController } from '@root/api/controllers/auth/authLogin.controller';
import { AuthService } from '@root/application/Services/Auth/AuthService';
import {container} from 'tsyringe';

export default ()=>{
    container.register("IServices", {useClass: AuthService});

}
export const loginController = container.resolve(AuthLoginController);

