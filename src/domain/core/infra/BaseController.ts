import * as express from 'express'

export abstract class BaseController {
  
  protected req!: express.Request;
  protected res!: express.Response;
  protected next!: express.NextFunction;

  

  public execute (req: express.Request, res: express.Response, next: express.NextFunction): void {
    this.req = req;
    this.res = res;
    this.next = next;

    
  }
}