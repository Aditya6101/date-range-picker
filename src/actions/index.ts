"use server";
import { sub, format } from "date-fns";

export async function dateAction(prevState, formData: FormData) {
    // get the form data
    let obj = {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    let { number, unit } = Object.fromEntries(formData);
    if (!number || !unit) return prevState;

    obj = { ...obj, [unit.toLowerCase()]: Number(number) };

    let result = sub(new Date(), obj);
    let now = new Date();

    let from = format(result, "dd-MM-yyyy hh:mm:ss aa");
    let to = format(now, "dd-MM-yyyy hh:mm:ss aa");

    return {
        from,
        to,
    };
}
