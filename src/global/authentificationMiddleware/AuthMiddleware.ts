import { Request, Response, NextFunction } from 'express';
import { NotAuthorized } from '../errorMiddleware/BaseError';
import jwt from 'jsonwebtoken';
import { config } from '@root/config';

export class AuthMiddleware{

    public checkAuthentification(req: Request, res: Response, next: NextFunction){
        if(!req.session?.jwt){
            throw new NotAuthorized('Authorization is needed for this page');
        }
        next();
    }

    public checkAuthorization(req: Request, res: Response, next: NextFunction){
        if(!req.session?.jwt){
            throw new NotAuthorized('Authorization is needed for this page');
        }
        
        const sessionPayload = req.session.jwt;

        try {
            jwt.verify(sessionPayload, config.SECRET_JWT!);
        } catch (error) {
            throw new NotAuthorized('Token is invalid');
        }

        next();
    }
}