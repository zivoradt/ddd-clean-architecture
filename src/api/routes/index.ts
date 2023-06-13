import  { Application } from 'express';
import { authRouter} from '@root/api/routes/auth/auth.router';
import { dinnerRouter } from './dinner/dinner.router';
import { AuthMiddleware } from '@root/global/authentificationMiddleware/AuthMiddleware';


const BASE_PATH = '/api/v1'


class Routes {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public initializeRoutes(): void {
    
    this.app.use(BASE_PATH, authRouter.routes());
    this.app.use(BASE_PATH, AuthMiddleware.prototype.checkAuthorization ,dinnerRouter.routes());
    
  }
}

export default Routes;