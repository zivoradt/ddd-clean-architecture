import dotenv from 'dotenv';
import buynan from 'bunyan';

dotenv.config();


export class Config{
    public PORT: string | undefined;
    public MONGO_DB: string | undefined;

    constructor(){
       this.PORT = process.env.PORT || '5000';
       this.MONGO_DB = process.env.MONGO_DB || "";
    }

    public validateConfig(){
        for(const [key, value] of Object.entries(this)){
            if(value === undefined){
                throw new Error(`The missing config for ${key}, and it's undefined`);
            }
        }
    }

    public createLogger(name: string): buynan{
        return buynan.createLogger({name, level: 'debug'});
    }

}

export const config: Config = new Config();