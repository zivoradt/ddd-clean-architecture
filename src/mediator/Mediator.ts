
import { singleton } from "tsyringe";
import { IRequest } from "./interfaces/IRequest";
import { IRequestHandler } from "./interfaces/IRequestHandler";

@singleton()
export class Mediator{
    public handlers: Map<string, IRequestHandler<any>> = new Map();

    public registerHandler<T extends IRequest>(requestType: string, handler: IRequestHandler<T>): void {
        this.handlers.set(requestType, handler);
    }

    public async send<T extends IRequest>(request: T): Promise<any>{
        
        const requestType: string = request.constructor.name;
        const handler: IRequestHandler<T> | undefined = this.handlers.get(requestType);

        
        if(!handler){
            throw new Error(`No handler is registerd for request ${requestType}`);
        }

        return handler.handle(request);
    }
}