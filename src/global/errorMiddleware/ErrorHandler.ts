import { Response } from 'express';
import buynan from 'bunyan';
import { BaseError } from './BaseError';
import HTTP_STATUS from 'http-status-codes';




export class ErrorHandler{

    private logger: buynan
    constructor(logger: buynan) {
        this.logger = logger;
    }

    public async customErrorHandler(err: BaseError | Error, res:Response): Promise<any>{
        this.logger.error(err);
        return res.status((err as BaseError).httpCode).json({err: err});


    }
    public async ErrorHandler(err: Error, res: Response): Promise<any>{
        this.logger.error(err);
        return res.status(HTTP_STATUS.BAD_REQUEST).json({message: 'Internal Server Error'});


    }

    public isTrustedError(err: Error): boolean{
        return err instanceof BaseError && err.isOperational;
    }
}