import { IDateTimeProvider } from "@root/application/common/interface/services/IDateTimeProvider";

export class DateTimeProvider implements IDateTimeProvider{

    public now(): Date{
        return new Date()
    }
}