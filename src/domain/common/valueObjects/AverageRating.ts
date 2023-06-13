import { ValueObject } from "@root/domain/models/ValueObject";

export interface AverageRatingValues{
    Values: number,
    NumRating: number
}


export class AverageRating extends ValueObject<AverageRatingValues>{

    private constructor(ratingValues: AverageRatingValues) {
        super(ratingValues)
    }

    public createNew(): AverageRating{
        const ratingDefault: AverageRatingValues = {
            Values: 0,
            NumRating: 0
        }
        return new AverageRating(ratingDefault)
    }

    //public addNewRating()
}