import { MenuItemsRequestDto, MenuRequestDto, MenuSectionRequestDto } from "@root/application/Services/Menu/common/MenuRequestDto";
import { User } from "@root/domain/entities/user";
import { CreateMenuCommand, MenuSectionCommand } from "@root/mediator/menu/request/CreateMenuCommand";
import { merge } from "lodash"
import {Request} from 'express'
import { MenuItemCommand } from '../../../mediator/menu/request/CreateMenuCommand';
import { HostId } from '../../../domain/host/valueObjects/HostId';
import { Menu } from "@root/domain/menu/Menu";
import { MenuSection } from "@root/domain/menu/entities/MenuSection";
import { MenuItemsResponseDto, MenuResponseDto, MenuSectionResponseDto } from '../../../application/Services/Menu/common/MenuResponseDto';
import { json } from 'body-parser';

export class Mapping{
    protected merge = merge;
    constructor() {
        
    }

    public authResultMap(user: User, token: string){
        return this.merge({User: user}, {Token: token});
    }   


    public menuToResponseDTO(menu: Menu): any {
        
    
        const menuEnttiy: Menu = menu;

        const menuSection: MenuSection[] = menu.menuItems()

        const menuSectionDto: MenuSectionResponseDto[] = menuSection.map((section)=>{
          return {
            id: section._id.value(),
            name: section.getName(),
            description: section.getDescription(),
            items: section.items.map((item)=>{
              return {
                id: item._id.value(),
                name: item.getName(),
                description: item.getDescription()
              } ;
            })
          }
        })
        

        const menuResponseDto: MenuResponseDto = {
          id: menuEnttiy.getID().value(),
          name: menuEnttiy.getName(),
          description: menuEnttiy.getDescription(),
          averageRating: menuEnttiy.getAverageRating().getAveragerRating(),
          hostId: menuEnttiy.getHostId().value(),
          dinerId: menuEnttiy.getDinnerItems().map((item) => item.value()),
          menuReviewId: menuEnttiy.getMenuReviewsIds().map((item)=> item.value()),
          createdDateTime: menuEnttiy.getCreatedDateTime(),
          updatedDateTime: menuEnttiy.getUpdatedDateTime(),
          section: menuSectionDto

        }

        return menuResponseDto;

      }
    
     public createMenuCommand(req: Request, hostid: string): CreateMenuCommand{
        const menuCommand: CreateMenuCommand = {
            hostId: hostid,
            name: req.body.name,
            description: req.body.description,
            sections: req.body.sections,
        
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

        

        const menu: CreateMenuCommand = new CreateMenuCommand(
            menuCommand.name,
            menuCommand.hostId,
            menuCommand.description,
            menuCommand.sections.map((section) =>
              new MenuSectionCommand(
                section.name,
                section.description,
                section.items.map((item) => new MenuItemCommand(item.name, item.description))
              )
            )
          );

          
          return  menu;
     } 



           
    }
         
          

      
      

