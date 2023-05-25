import mongoose, { Mongoose, connect } from "mongoose";
import { config } from "./config";
import Logger from "bunyan";
import { error } from "console";

const log: Logger = config.createLogger('database');


export class DatabaseConnection{
    private moongoBClient: Mongoose;
    constructor(){
        this.moongoBClient = mongoose;
    }
    public async connect(){
       this.moongoBClient.connect(`${config.MONGO_DB}`).
       then(()=>{
        log.info("Database is connected");
       }).catch((error)=>{
        log.error('Error to connect to database', error);
       })
       this.moongoBClient.connection.on('disconnected', connect);
    }
    
}
export const databaseConnection: DatabaseConnection =new DatabaseConnection();