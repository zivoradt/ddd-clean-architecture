import { ValueObject } from '../../models/ValueObject';
import { v4 as uuidv4 } from "uuid";

interface ID{
    id: string;
}

export class MenuSectionId extends ValueObject<ID>{
    
    private constructor(id: ID) {
        super(id)
    }

    public value(){
        return this.props.id
    }

    public static createUnique(): MenuSectionId{
        const id: ID = {
            id: uuidv4()
        }
        return new MenuSectionId(id)
    }
}

