import { ValueObject } from "./ValueObject";

interface IPrice{
    Amount: number;
    Currency: string
}


export class Price extends ValueObject<IPrice>{
    
    constructor(props: IPrice) {
        super(props)
    }

    public amount(){
        return this.props.Amount;
    }
    public currency(){
        return this.props.Currency;
    }

}
