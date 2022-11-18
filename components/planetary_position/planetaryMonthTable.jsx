import React from "react";
import {icon} from "./utils";
import {useRouter} from "next/router";

export default function PlanetaryMonthTable({ml,year,data}){
   const router = useRouter();
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
                    <td key={i} onClick={()=> router.push("/planetary-events/details")} className="px-3 cursor-pointer py-2  flex gap-4 hover:bg-zinc-200/70 duration-[100ms] ease-in">
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