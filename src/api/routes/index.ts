import  { Application } from 'express';
import { homepageRouter } from '@routes/homepage/homepage.route';


const BASE_PATH = '/api/v1'


class Routes {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public initializeRoutes(): void {
    
    this.app.use(BASE_PATH, homepageRouter.routes());
    
  }
}

export default Routes;