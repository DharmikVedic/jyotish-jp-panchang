import {FetchAPI} from "./utils/fetchapi";

export const Timezone = async  (input) =>{
    const date = input.month+"-"+input.day+"-"+input.year;
    if(input.country !== "japan"){
        const timezone = await FetchAPI("timezone_with_dst",{latitude: parseFloat(input.lat),longitude:parseFloat(input.lon),date:date});
        return {timezone: timezone.response.timezone };
    }
}