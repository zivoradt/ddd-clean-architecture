import { Entity } from "@root/domain/models/Entity";
import { MenuSectionId } from "../valueObjects/MenuSectionId";
import { MenuItem } from "./MenuItem";



export class MenuSection extends Entity<MenuSectionId>{

    protected _items: MenuItem[];
    protected name: string;
    protected description: string;

    private constructor(menuSectionId: MenuSectionId, name: string, desciption: string, menuItems: MenuItem[]) {
        super(menuSectionId)
        this.name = name;
        this._items = menuItems;
        this.description = desciption
    }

    public static create(name: string, description: string, menuItem: MenuItem[]): MenuSection{
        return new MenuSection(MenuSectionId.createUnique(), name, description, menuItem);
    }
    
    public get items(): readonly MenuItem[] {
        return this._items;
      }

    public getName(){
        return this.name;
    }
    public getDescription(){
        return this.description;
    }

    
}