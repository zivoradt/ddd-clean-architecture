import { Menu } from "@root/domain/menu/Menu";
import { IRequestHandler } from "../../interfaces/IRequestHandler";
import {
  CreateMenuCommand,
  MenuSectionCommand,
} from "../request/CreateMenuCommand";
import { HostId } from "@root/domain/host/valueObjects/HostId";
import { MenuSection } from "@root/domain/menu/entities/MenuSection";
import { MenuItem } from "@root/domain/menu/entities/MenuItem";
import { IMenuRepository } from "@root/application/common/interface/persistance/IMenuRepository";
import { inject, injectable } from "tsyringe";
import { MenuRepository } from "@root/infrastructure/persistance/repositories/MenuRepository";

@injectable()
export class CreateMenuCommandHandler
  implements IRequestHandler<CreateMenuCommand>
{
    protected readonly _menuRepository: IMenuRepository;
    constructor(@inject('IMenuRepository') menuRepository: IMenuRepository) {
        this._menuRepository = menuRepository;
    }
  public async handle(createMenuCommand: CreateMenuCommand): Promise<any> {
    try {
      const menu: Menu = Menu.create(
        createMenuCommand.name,
        createMenuCommand.description,
        HostId.createUnique(createMenuCommand.hostId),
        createMenuCommand.sections.map((section) => {
          return MenuSection.create(
            section.name,
            section.description,
            section.items.map((item) => {
              return MenuItem.create(item.name, item.description);
            })
          );
        })
      );

      this._menuRepository.add(menu);

      return menu;
    } catch (error) {
      throw new Error();
    }
  }
}
