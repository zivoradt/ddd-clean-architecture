import { ValueObject } from "@root/domain/models/ValueObject";

export interface RatingValues{
    Value: number,
    
}


export class Rating extends ValueObject<RatingValues>{

    private constructor(ratingValues: RatingValues) {
        super(ratingValues)
    }

    public createNew(rating: RatingValues): Rating{
       
        return new Rating(rating)
    }

    public value(){
        return this.props.Value
    }

}