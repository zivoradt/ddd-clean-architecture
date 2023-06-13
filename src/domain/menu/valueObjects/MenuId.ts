import { ValueObject } from '../../models/ValueObject';
import { v4 as uuidv4 } from "uuid";

interface ID{
    id: string;
}

export class MenuId extends ValueObject<ID>{
    
    private constructor(id: ID) {
        super(id)
    }

    public value(){
        return this.props.id
    }

    public static createUnique(): MenuId{
        const id: ID = {
            id: uuidv4()
        }
        return new MenuId(id)
    }
}

