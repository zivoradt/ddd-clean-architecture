import dotenv from 'dotenv';

dotenv.config();


export class Config{
    public PORT: string | undefined;

    constructor(){
       this.PORT = process.env.PORT || '5000';
    }

    public validateConfig(){
        for(const [key, value] of Object.entries(this)){
            if(value === undefined){
                throw new Error(`The missing config for ${key}, and it's undefined`);
            }
        }
    }

}

export const config: Config = new Config();