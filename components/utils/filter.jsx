export function PreviousDate(date){
    return new Date((date).valueOf() - 1000 * 60 * 60 * 24);
}
export function NextDate(date){
    return new Date((date).valueOf() + 1000 * 60 * 60 * 24);
}