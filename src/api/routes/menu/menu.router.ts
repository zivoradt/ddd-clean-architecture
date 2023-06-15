import { MenuContorller } from "@root/api/controllers/menu/menu.controller";
import { diContainer } from "@root/dependencies/dependencies";
import { BaseRouter } from "@root/domain/core/infra/BaseRouter";
import { AuthMiddleware } from "@root/global/authentificationMiddleware/AuthMiddleware";
import { Router } from "express";



export class MenuRouter extends BaseRouter{
    protected menuController: MenuContorller;

    constructor() {
        super()
        this.menuController = diContainer.mediator.resolve<MenuContorller>(MenuContorller);
    }

    public routes(): Router{

        this.router.post('/hosts/:hostId/menus',  AuthMiddleware.prototype.checkAuthorization, (req, res, next)=>this.menuController.execute(req, res, next));

        return this.router;
    }
}

export const menuRouter: MenuRouter = new MenuRouter();