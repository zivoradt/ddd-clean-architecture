import "reflect-metadata"
import { config } from "./config";
import Logger from "bunyan";
import {BaseEntity, DataSource, DataSourceOptions, EntityManager, EntityTarget, ObjectLiteral, Repository} from 'typeorm'
import {  RegisterUserr } from "./infrastructure/persistance/entities/RegisterUser";
import { injectable } from "tsyringe";

const log: Logger = config.createLogger('database');

const databaseConfig: DataSourceOptions = {
    type: "postgres",
    host: config.DEV_HOST,
    port: config.DEV_PORT as unknown as number,
    username: "postgres",
    password: config.DB_PASSWORD,
    database: "postgres",
    entities: [RegisterUserr],
    synchronize: true,
    logging: false,
}

@injectable()
export class DatabaseConnection{
    private posgresql: DataSource;
    constructor(){
        this.posgresql = new DataSource(databaseConfig)
        
    }

    public async connect(){
       await this.posgresql.initialize().
       then(()=>{
        log.info("Database is connected");
       }).catch((error)=>{
        log.error('Error to connect to database', error);
       })
       
    }

    public getRepository<T extends ObjectLiteral>(params: EntityTarget<T>): Repository<T>{
        return this.posgresql.getRepository(params)
    }
    
}

export const databaseConnection: DatabaseConnection = new DatabaseConnection();