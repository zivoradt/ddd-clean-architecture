import { DinnerId } from "../dinner/valueObjects/DinnerId";
import { HostId } from "../host/valueObjects/HostId";
import { AggregateRoot } from "../models/AggregateRoot";
import { MenuSection } from "./entities/MenuSection";
import { MenuId } from "./valueObjects/MenuId";


export class Menu extends AggregateRoot<MenuId>{
    
    protected name: string;
    protected description: string;
    protected averageRating: number;
    protected hostId: HostId;
    protected dinnerId: DinnerId[] = [];
    protected createdDateTime: Date;
    protected updatedDateTime: Date;
    protected readonly _items: MenuSection[] = [];

    private constructor(menuId: MenuId, name: string, description: string, hostId: HostId, createdTime: Date, updatedTime: Date) {
        super(menuId)
        this.name = name,
        this.description = description,
        this.hostId = hostId,
        this.createdDateTime = createdTime,
        this.updatedDateTime = updatedTime
    }

    public create(name: string, description: string, hostId: HostId): Menu{
        return new Menu(MenuId.createUnique(), name, description, hostId, new Date(), new Date())
    }

    public get dinnerItems(): readonly DinnerId[] {
        return this.dinnerId;
      }

    public get menuItems(): readonly MenuSection[] {
        return this._items;
      }

    public getName(){
        return this.name;
    }
    public getDescription(){
        return this.description;
    }
    public getAverageRating(){
        return this.averageRating;
    }
    public getHostId(){
        return this.hostId;
    }
    public getCreatedDateTime(){
        return this.createdDateTime;
    }
    public getUpdatedDateTime(){
        return this.updatedDateTime;
    }

}