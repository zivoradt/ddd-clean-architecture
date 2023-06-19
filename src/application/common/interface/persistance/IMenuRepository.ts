import { User } from "@root/domain/entities/user";
import { Menu } from "@root/domain/menu/Menu";


export interface IMenuRepository{
    

    add(menu: Menu): void
}