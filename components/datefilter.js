function DateFilter() {
const date = new Date();
let time = date.getTime();


}


function AmPMDate(hour) {
    let ampm = '';''
if(hour > 12){
    hour = hour-12;
    ampm = "PM";
}
return {hour,ampm};
}