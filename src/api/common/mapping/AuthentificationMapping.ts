import { User } from "@root/domain/entities/user";
import { merge } from "lodash"
export class Mapping{
    protected merge = merge;
    constructor() {
        
    }

    public authResultMap(user: User, token: string){
        return this.merge({User: user}, {Token: token});
    }      
         
          
}
      
      

