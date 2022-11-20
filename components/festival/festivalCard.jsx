import {useRouter} from "next/router";
import {mL} from "../../pages/festival";
import {Encode} from "../utils/decode";

export default function FeativalYearCard({year,monthName,festival}){
    return(
        <div   className="flex flex-col  bg-white">
            <h6 className="text-white bg-[#FD766B] font-bold text-lg text-center py-2 md:text-xl">
                {monthName} {year.year}
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full divide-zinc-100 divide-y">
                {festival.map((fest,i)=>(
                <FestivalCard input={year} data={fest} key={i} />
            ))}
            </div>
        </div>
    )
}


function FestivalCard({data,input}){
    const router = useRouter();
    let date = new Date(data.year,data.month,data.date)
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const url = data.festival_key.toLowerCase();


    const hanleClick = ()=>{
        const obj = {
            festival_date:data.year+"-"+data.month+"-"+data.date,
            timezone:input.timezone,
            festival_name:data.festival_key,
            latitude:input.lat,
            longitude:input.lon
        }
        const hideLink = ["HOLI","CHHOTI_HOLI","DHANU_SANKRANTI","RAKSHA_BANDHAN","CHAITRA_NAVRATRI","CHANDRA_GRAHAN","VISHWAKARMA_PUJA","HOLIKA_DAHAN","DIWALI","LAKSHMI_PUJA","NAVRATRI_BEGINS","SARASWATI_AVAHAN","SARASWATI_PUJA","VARALAKSHAMI_VRAT"];

        if(hideLink.includes(data.festival_key)){
            return;
        }
        else{
            const encode = Encode(JSON.stringify(obj));
            router.push({pathname:`/festival/${url}`,query:{
                    q:encode
                }})
        }
    }



    return(
        <div onClick={hanleClick} className="flex gap-3 items-center hover:bg-zinc-100 cursor-pointer">
            <img src="/panchang.png" className="w-[100px] px-5 py-2 bg-red-100" />
            <div className="flex flex-col  ">
                <h6 className="text-red-700 font-semibold md:text-lg">
                    {data.festival}
                </h6>
                <p>
                    {mL[data.month-1]} {data.date}, {data.year} , {daysInWeek[date.getDay()]}
                </p>
            </div>
        </div>
    )
}


export function convert_Date_to_redable(data){
    let date = new Date(data.replace(/-/g, "/"))
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return mL[date.getMonth()] + ", " +date.getDate() + " " +date.getFullYear()+", "+daysInWeek[date.getDay()];
}



function HideClick(array){
    const arr = ["HOLI","CHHOTI_HOLI","DHANU_SANKRANTI","RAKSHA_BANDHAN","CHAITRA_NAVRATRI","CHANDRA_GRAHAN","VISHWAKARMA_PUJA"];
}







