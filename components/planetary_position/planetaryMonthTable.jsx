import React from "react";
import {icon} from "./utils";
import {useRouter} from "next/router";

export default function PlanetaryMonthTable({ml,year,data}){
   const router = useRouter();
<<<<<<< HEAD


    const sign = {
        "太陽":"sun",
        "月":"moon",
        "火星":"mars",
        "水星":"mercury",
        "木星":"jupiter",
        "金星":"venus",
        "土星":"saturn",
        "さそり座":"uranus",
        "ネプチューン":"neptune",
        "冥王星":"pluto",
    }

    // {
    //     "event_name": "NAKSHATRA_TRANSIT",
    //     "planet_id": 3,
    //     "planet_name": "水星",
    //     "event_text": "水星 enters in ジェーシュター.",
    //     "event_start_date": "November 24, 2022, Thursday at 17:10",
    //     "event_start_ms": 1669309810837
    // }
    //


    const handleLink = (data)=>{
        const event_name = data.event_name == "NAKSHATRA_TRANSIT" ? "nakshatra" : "sign";
        const signs = sign[data.planet_name];
        const query  = {
            pathname: `/planetary-events/${event_name}`,
                query: { planet: signs },
        }
        router.push(query);
    }



=======
>>>>>>> origin/new-branch
    return(
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th className="heading">
                        {ml} {year} Planetary Events
                </th>
                </tr>
                </thead>
                <tbody>
                <tr className={"grid grid-cols-1 w-full md:grid-cols-2 "}>
                {data.map((item,i)=>(
<<<<<<< HEAD
                    <td key={i} onClick={()=> handleLink(item)} className="px-3 cursor-pointer py-2  flex gap-4 hover:bg-zinc-200/70 duration-[100ms] ease-in">
=======
                    <td key={i} onClick={()=> router.push("/planetary-events/details")} className="px-3 cursor-pointer py-2  flex gap-4 hover:bg-zinc-200/70 duration-[100ms] ease-in">
>>>>>>> origin/new-branch
                        <div className="w-[10%] m-auto  pr-2 text-center border-zinc-300 border-r">
               <span className="font-zodiac text-[23px]">
                   {icon[item.planet_id]}
            </span>
                        </div>
                        <div className="w-[95%]">
                            <p>
            <span className="text-yellow-700">
                {item.event_text}
            </span>
                            </p>
                            <p className="text-zinc-600 text-sm">
                                {item.event_start_date}
                            </p>
                        </div>
                    </td>
                ))}
                </tr>
                </tbody>
            </table>
        </div>
    )
}