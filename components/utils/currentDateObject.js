export function currentDateObj(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year= date.getFullYear();
    const initialValue = {
        day: day,
        month: month,
        year: year,
        min: date.getMinutes(),
        hour: date.getHours(),
        lat: 35.6761919,
        lon: 139.6503106,
        tzone: 9,
    }

    return {day,month,year,initialValue}
}