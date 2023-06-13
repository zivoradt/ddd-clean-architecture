import { Entity } from "@root/domain/models/Entity";
import { MenuItemId } from "../valueObjects/MenuItemId";



export class MenuItem extends Entity<MenuItemId>{
    protected name: string;
    protected description: string;
    
    private constructor(menuItemId: MenuItemId, name: string, description: string) {
        super(menuItemId)
        this.name = name;
        this.description = description;
    }

    public static create(name: string, description: string): MenuItem{
        return new MenuItem(MenuItemId.createUnique(), name, description);
    }

    public getName(){
        return this.name;
    }
    public getDescription(){
        return this.description;
    }
}