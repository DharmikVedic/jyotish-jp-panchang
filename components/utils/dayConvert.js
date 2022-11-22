export default function Day(day){
    if(day == 1){
        return day + "st"
    }
    else if(day == 2){
        return day + "nd"
    }
    else if(day == 3){
        return day + "rd"
    }
    else{
        return day + "th"
    }
}