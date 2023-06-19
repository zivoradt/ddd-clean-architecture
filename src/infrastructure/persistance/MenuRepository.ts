import { User } from '@root/domain/entities/user';

import { IMenuRepository } from '@root/application/common/interface/persistance/IMenuRepository';
import { Menu } from '@root/domain/menu/Menu';


export class MenuRepository implements IMenuRepository {
    
    private menus: Menu[] = []

    public add(menu: Menu) {
        
        this.menus.push(menu);
        
    }

}

