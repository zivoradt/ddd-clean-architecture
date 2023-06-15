import { IRequest } from "@root/mediator/interfaces/IRequest";


export interface CreateMenuCommand extends IRequest{
    hostId: string,
    name: string,
    description: string,
    sections: MenuSectionCommand[];
}
export interface MenuSectionCommand extends IRequest{
    name: string,
    description: string,
    items: MenuItemCommand[];
}
export interface MenuItemCommand extends IRequest{
    name: string,
    description: string,
}

