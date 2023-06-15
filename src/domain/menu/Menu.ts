import { AverageRating } from "../common/valueObjects/AverageRating";
import { DinnerId } from "../dinner/valueObjects/DinnerId";
import { HostId } from "../host/valueObjects/HostId";
import { MenuReviewId } from "../menuReview/valueObjects/MenuReviewId";
import { AggregateRoot } from "../models/AggregateRoot";
import { MenuSection } from "./entities/MenuSection";
import { MenuId } from "./valueObjects/MenuId";


export class Menu extends AggregateRoot<MenuId>{
    
    protected name: string;
    protected description: string;
    protected averageRating: AverageRating;
    protected createdDateTime: Date;
    protected updatedDateTime: Date;
    protected hostId: HostId; 
    protected _menuReviewId: MenuReviewId[] = [];
    protected _dinnerId: DinnerId[] = [];
    protected readonly _menuSection: MenuSection[] = [];

    private constructor(menuId: MenuId, name: string, description: string, hostId: HostId, averageRating: AverageRating, createdTime: Date, updatedTime: Date) {
        super(menuId)
        this.name = name,
        this.description = description,
        this.hostId = hostId,
        this.averageRating = averageRating,
        this.createdDateTime = createdTime,
        this.updatedDateTime = updatedTime
    }

    public static create(name: string, description: string, hostId: HostId): Menu{
        return new Menu(MenuId.createUnique(), name, description, hostId, AverageRating.createNew() , new Date(), new Date())
    }

    public get dinnerItems(): readonly DinnerId[] {
        return this._dinnerId;
      }

    public get menuItems(): readonly MenuSection[] {
        return this._menuSection;
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