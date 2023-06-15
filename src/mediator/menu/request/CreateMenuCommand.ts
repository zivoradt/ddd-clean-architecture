import { IRequest } from "@root/mediator/interfaces/IRequest";


/* export class CreateMenuCommand implements IRequest{
    protected hostId: string,
    protected name: string,
    protected description: string,
    protected sections: MenuSectionCommand[];

    constructor(hostId: string, name: string, description: string, section: MenuItemCommand) {
        this.hostId = hostId,
        this
    }
} */

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

