import { IDateTimeProvider } from "@root/application/common/interface/services/IDateTimeProvider";
import { number } from "joi";

export class DateTimeProvider implements IDateTimeProvider{

    public now(minutes: number): Date{

        const currentDate = new Date();
        const min = minutes
        currentDate.setMinutes(currentDate.getMinutes() + min);
        return currentDate;
    }
}