export function dateDifference(date1,date2){
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffDateTime = Math.abs(d1-d2);
    const diffDateDays = Math.ceil(diffDateTime /(1000* 60*60*24));
    switch(diffDateDays){
        case 0:
            return "(Today)";
        default:
            return "("+ diffDateDays + " Days" + ")";
    }
}

export function getMultipleDate(numberDates){
    var todayDate = new Date();
    let dateArray = [{day:todayDate.getDate(),month:todayDate.getMonth()+1,year:todayDate.getFullYear()}];
    for (let i = 0;i<numberDates;i++){
        let result = new Date(todayDate.setDate(todayDate.getDate() + 1));
        let dateObject = {day:result.getDate(),month:result.getMonth()+1,year:result.getFullYear()};
        dateArray.push(dateObject);
    }
    return dateArray;
}


export function convertDayMonthYearDate(object){
    return new Date(`${object.year}-${object.month}-${object.day}`.replace(/-/g, "/"));
}


export function SPlitDate(date,id){
    return parseInt(date.split(":")[id]);
}
