import { ValueObject } from '../../models/ValueObject';
import { v4 as uuidv4 } from "uuid";

interface ID{
    id: string;
}

export class HostId extends ValueObject<ID>{
    
    private constructor(id: ID) {
        super(id)
    }

    public value(){
        return this.props.id
    }

    public static createUnique(Id?: string): HostId{

        if(Id){
            const idd: ID = {
                id: Id
            }
            return new HostId(idd)
        }
        else{
            const id: ID = {
                id: uuidv4()
            }
            return new HostId(id)
        }
    }
}

