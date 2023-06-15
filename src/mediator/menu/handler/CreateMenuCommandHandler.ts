import { Menu } from '@root/domain/menu/Menu';
import { IRequestHandler } from '../../interfaces/IRequestHandler';
import { CreateMenuCommand, MenuSectionCommand } from '../request/CreateMenuCommand';
import { HostId } from '@root/domain/host/valueObjects/HostId';
import { MenuSection } from '@root/domain/menu/entities/MenuSection';
import { MenuItem } from '@root/domain/menu/entities/MenuItem';



export class CreateMenuCommandHandler implements IRequestHandler<CreateMenuCommand> {

    public async handle(createMenuCommand: CreateMenuCommand): Promise<any> {

        console.log(createMenuCommand);
        try {
            const menu: Menu = Menu.create(
                createMenuCommand.name,
                createMenuCommand.description,
                HostId.createUnique(),
                createMenuCommand.sections.map((section) =>
                    MenuSection.create(
                        section.name,
                        section.description,
                        section.items.map((item) => MenuItem.create(item.name, item.description))
                    )
                )
            );
            throw new Error()
        } catch (error) {
            throw new Error()
        }

           
        };
    }
