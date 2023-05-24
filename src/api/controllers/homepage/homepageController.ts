import HTTP_STATUS  from "http-status-codes";
import {BaseController} from '../../../domain/core/infra/BaseController'


export class HomepageController extends BaseController{
    

     protected executeImpl(): void {
        
         this.res.status(HTTP_STATUS.OK).json({message: 'Hello'})
    }
}

