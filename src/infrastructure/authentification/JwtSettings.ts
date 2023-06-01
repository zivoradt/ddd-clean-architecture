import {  injectable } from "tsyringe";

const ISSUER: string = "BubberDinner"
const AUDIENCE: string = "BubberDinner";
const MINUTES: number = 60;

@injectable()
export class JwtSettings{

    private _issuer: string;
    private _audience: string;
    private minutes: number;

    constructor() {
        this.minutes = MINUTES;
        this._audience = AUDIENCE;
        this._issuer = ISSUER;
    }

    public expiryMinutes(): number{
        return this.minutes;
    }

    public issuer(): string{
        return this._issuer;
    }

    public audience(): string{
        return this._audience;
    }
}