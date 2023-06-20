import "reflect-metadata";
import { DataSource, EntityManager } from "typeorm";
import { DatabaseConnection } from "@root/databaseSetup";
import { inject, injectable } from "tsyringe";
import { diContainer } from "@root/dependencies/dependencies";


@injectable()
export class DatabaseContext{
    public _db: DataSource;

    constructor(@inject('DatabaseConnection')db: DatabaseConnection) {
        this._db = db.share()
    }

    public getManager(){
        return this._db
    }


}