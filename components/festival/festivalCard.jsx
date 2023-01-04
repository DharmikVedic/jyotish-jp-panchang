import {useRouter} from "next/router";
import {mL} from "../../pages/festival";
import {Encode} from "../utils/decode";
import React, {useState} from "react";
import {january, limited_festival, LimitedFestival} from "./festivalArray";

export default function FeativalYearCard({year,monthName,festival}){

    const [showmore,setshowmore] = useState(false);
    const [data,setdata] = useState(LimitedFestival(festival,limited_festival[monthName.toLowerCase()]));

    const handleMore = ()=>{
        if(!showmore){
            setshowmore(true);
            setdata(festival);
        }
        else{
            setdata(LimitedFestival(festival,limited_festival[monthName.toLowerCase()]));
            setshowmore(false);
        }
    }

    // console.log(monthName,LimitedFestival(festival,limited_festival[monthName.toLowerCase()]));

    return(
        <div   className="flex flex-col  bg-white">
            <h6 className="text-white bg-[#FD766B] font-bold text-lg text-center py-2 md:text-xl">
                {monthName} {year.year}
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full divide-zinc-100 divide-y">
                {data.map((fest,i)=>(
                <FestivalCard input={year} data={fest} key={i} />
            ))}
            </div>
            <button onClick={handleMore}
                    className={`${showmore ? "flex-row-reverse" :"flex-row justify-end"} text-sky-500 bg-white rounded-b-md w-full  flex py-2 text-lg  hover:underline border-t w-full border-zinc-200 px-5 items-center`}>
                {showmore ?
                    (
                        <span className="text-sky-500 font-semibold">
                          Hide
                      </span>
                    )
                    :
                    (
                        <>
                            More
                      <span className="text-sky-500 pl-1">
                           {monthName}
                      </span>
                      </>
                    )
                }
                <span className={`mt-1 ${showmore ? "rotate-180" : "rotate-0"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"/>
</svg>
                </span>
            </button>
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
            longitude:input.lon,
            japanese:data.japanese
        }
        const hideLink = ["HOLI","CHHOTI_HOLI","DHANU_SANKRANTI","RAKSHA_BANDHAN","CHAITRA_NAVRATRI","CHANDRA_GRAHAN","VISHWAKARMA_PUJA","HOLIKA_DAHAN","DIWALI","LAKSHMI_PUJA","NAVRATRI_BEGINS","SARASWATI_AVAHAN","SARASWATI_PUJA","VARALAKSHAMI_VRAT","BHAIYA_DOOJ","HANUMAN_JAYANTI"];

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
                <h6 className="text-red-700 font-semibold md:text-[17px]">
                    {data?.japanese ? data?.japanese : data.festival}
                </h6>
                <p>
                    {mL[data.month-1]} {data.date}, {data.year} , {daysInWeek[date.getDay()]}
                </p>
            </div>
        </div>
    )
}


export function convert_Date_to_redable(data){
    let date = new Date(data.replace(/-/g, "/"));
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return mL[date.getMonth()] + ", " +date.getDate() + " " +date.getFullYear()+", "+daysInWeek[date.getDay()];
}



function HideClick(array){
    const arr = ["HOLI","CHHOTI_HOLI","DHANU_SANKRANTI","RAKSHA_BANDHAN","CHAITRA_NAVRATRI","CHANDRA_GRAHAN","VISHWAKARMA_PUJA"];
}








