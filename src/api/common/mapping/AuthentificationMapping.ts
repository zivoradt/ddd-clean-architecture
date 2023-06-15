import { MenuItemsRequestDto, MenuRequestDto, MenuSectionRequestDto } from "@root/application/Services/Menu/common/MenuRequestDto";
import { User } from "@root/domain/entities/user";
import { CreateMenuCommand, MenuSectionCommand } from "@root/mediator/menu/request/CreateMenuCommand";
import { merge } from "lodash"
import {Request} from 'express'
import { MenuItemCommand } from '../../../mediator/menu/request/CreateMenuCommand';
import { Menu } from "@root/domain/menu/Menu";
import { HostId } from "@root/domain/host/valueObjects/HostId";
import { MenuSection } from "@root/domain/menu/entities/MenuSection";
import { MenuItem } from "@root/domain/menu/entities/MenuItem";
export class Mapping{
    protected merge = merge;
    constructor() {
        
    }

    public authResultMap(user: User, token: string){
        return this.merge({User: user}, {Token: token});
    }   


    public fromRequestBodyToMenuRequestDto(req: Request): MenuRequestDto {
        
    
        const menuRequest: MenuRequestDto = req.body;

        
      
        const menuSectionRequest: MenuSectionRequestDto[] = menuRequest.sections.map((sectio: any) => {
          const { name, description, items } = sectio;
          const menuItems: MenuItemsRequestDto[] = items.map((item: any) => {
            const { name, description } = item;
            return {
              name,
              description,
            } as MenuItemsRequestDto;
          });
          return {
            name,
            description,
            items: menuItems,
          } as MenuSectionRequestDto;
        });
      
        menuRequest.sections = menuSectionRequest
        
      
        return menuRequest;
      }
    
     public createMenuCommand(menuRequestDto: MenuRequestDto, hostId: string): CreateMenuCommand{
        const menuCommand: CreateMenuCommand = {
            hostId: hostId,
            name: menuRequestDto.name,
            description: menuRequestDto.description,
            sections: menuRequestDto.sections,
        
        }

        const menuSectionItems: MenuSectionCommand[] = menuCommand.sections.map((section)=>{
            const {name, description, items} = section;
            const menuItems: MenuItemCommand[] = items.map((item)=>{
                const {name, description} = item;
                return{
                    name,
                    description
                } as MenuItemCommand
            })
            return{
                name,
                description,
                items: menuItems
            }
        })

        menuCommand.sections = menuSectionItems;

        

        const menu: Menu = Menu.create(
            menuCommand.name,
            menuCommand.description,
            HostId.createUnique(),
            menuCommand.sections.map((section) =>
              MenuSection.create(
                section.name,
                section.description,
                section.items.map((item) => MenuItem.create(item.name, item.description))
              )
            )
          );

          
          return  menuCommand;
     } 



           
    }
         
          

      
      

