import  { Application } from 'express';
import { authRouter} from '@root/api/routes/auth/auth.router';


const BASE_PATH = '/api/v1'


class Routes {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public initializeRoutes(): void {
    
    this.app.use(BASE_PATH, authRouter.routes());
    
  }
}

export default Routes;