import "reflect-metadata"
import { config } from "./config";
import Logger from "bunyan";
import {DataSource, DataSourceOptions, EntityManager} from 'typeorm'
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
       this.posgresql.initialize().
       then(()=>{
        log.info("Database is connected");
       }).catch((error)=>{
        log.error('Error to connect to database', error);
       })
       
    }

    public share(): DataSource{
        return this.posgresql
    }
    
}
