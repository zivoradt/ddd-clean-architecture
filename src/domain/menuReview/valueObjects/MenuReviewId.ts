import { ValueObject } from '../../models/ValueObject';
import { v4 as uuidv4 } from "uuid";

interface ID{
    id: string;
}

export class MenuReviewId extends ValueObject<ID>{
    
    private constructor(id: ID) {
        super(id)
    }

    public value(){
        return this.props.id
    }

    public static createUnique(): MenuReviewId{
        const id: ID = {
            id: uuidv4()
        }
        return new MenuReviewId(id)
    }
}

