import  { Application } from 'express';
import { authRouter} from '@root/api/routes/auth/auth.router';
import { dinnerRouter } from './dinner/dinner.router';


const BASE_PATH = '/api/v1'


class Routes {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public initializeRoutes(): void {
    
    this.app.use(BASE_PATH, authRouter.routes());
    this.app.use(BASE_PATH, dinnerRouter.routes());
    
  }
}

export default Routes;