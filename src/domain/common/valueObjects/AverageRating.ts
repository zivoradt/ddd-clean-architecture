import { ValueObject } from "@root/domain/models/ValueObject";
import { Rating } from "./Rating";

export interface AverageRatingValues{
    Values: number,
    NumRating: number
}


export class AverageRating extends ValueObject<AverageRatingValues>{

    private constructor(ratingValues: AverageRatingValues) {
        super(ratingValues)
    }

    public static createNew(): AverageRating{
        const ratingDefault: AverageRatingValues = {
            Values: 0,
            NumRating: 0
        }
        return new AverageRating(ratingDefault)
    }

    public addNewRating(rating: Rating){
        this.props.Values = ((this.props.Values * this.props.NumRating) + rating.value()) / ++this.props.NumRating;
    }

    public removeRating(rating: Rating){
        this.props.Values = ((this.props.Values * this.props.NumRating) - rating.value()) / --this.props.NumRating;
    }

}