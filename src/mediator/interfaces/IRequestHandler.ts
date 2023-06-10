import { IRequest } from "./IRequest";

export interface IRequestHandler<T extends IRequest>{
    handle(request: T): Promise<any>
}