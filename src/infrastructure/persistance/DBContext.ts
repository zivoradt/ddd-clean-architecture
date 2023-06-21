import "reflect-metadata";
import {  DataSource, EntityManager, Repository } from "typeorm";
import { DatabaseConnection, databaseConnection } from "@root/databaseSetup";
import { inject, injectable } from "tsyringe";
import { diContainer } from "@root/dependencies/dependencies";
import { RegisterUserr } from './entities/RegisterUser';


@injectable()
export class DatabaseContext{
    public db: Repository<RegisterUserr>
    
    constructor(@inject('DatabaseConnection')db: DatabaseConnection) {
         this.db = db.getRepository(RegisterUserr)
    }



    


}