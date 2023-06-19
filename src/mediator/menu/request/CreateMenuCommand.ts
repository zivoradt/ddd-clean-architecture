import { IRequest } from "@root/mediator/interfaces/IRequest";
import { MenuSection } from '../../../domain/menu/entities/MenuSection';
import { HostId } from '../../../domain/host/valueObjects/HostId';


 export class CreateMenuCommand implements IRequest{
    public name: string;
    public description: string;
    public hostId: string;
    public sections: MenuSectionCommand[];

    constructor( name: string, hostId: string, description: string, section: MenuSectionCommand[]) {
        this.name = name,
        this.hostId = hostId
        this.description = description,
        this.sections = section
    }
 }
    export class MenuSectionCommand implements IRequest{
    public name: string;
    public description: string;
    public items: MenuItemCommand[];

    constructor(name: string, description: string, item: MenuItemCommand[]){
        this.name = name,
        this.description = description
        this.items = item;
    }
}
export class MenuItemCommand implements IRequest{
    public name: string;
    public description: string;

    constructor(name: string, description: string) {
        this.name = name,
        this.description = description
    }

}

/* 
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
} */

