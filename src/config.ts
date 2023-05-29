import dotenv from 'dotenv';
import buynan from 'bunyan';

dotenv.config();


export class Config{
    public PORT: string | undefined;
    public MONGO_DB: string | undefined;
    public TOKEN_KEY1: string | undefined;
    public TOKEN_KEY2: string | undefined;
    public NODE_ENV: string | undefined;
    public SECRET_JWT: string | undefined;

    constructor(){
       this.PORT = process.env.PORT || '5000';
       this.MONGO_DB = process.env.MONGO_DB || "";
       this.TOKEN_KEY1 = process.env.TOKEN_KEY1 || "";
       this.TOKEN_KEY2 = process.env.TOKEN_KEY2 || "";
       this.NODE_ENV = process.env.NODE_ENV || "";
       this.SECRET_JWT = process.env.SECRET_JWT || "";
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