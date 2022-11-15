import PanchangCard from "../panchang/dailyPanhang";
import React from "react";

export default function PlanetaryPosition(){
    return(
        <>
            <PanchangCard link="/planetary-events" style="bg-sky-500/80" title="Upcoming Planetary Events">
<table className="table">
    <tbody>
    {[...Array(7)].map((item,i)=>(
        <tr key={i}>
        <TrEntry />
        </tr>
    ))}
    </tbody>
</table>
            </PanchangCard>
            </>
    )
}

export function TrEntry(){
    return(
        <>
                <td className=" flex gap-4  hover:bg-zinc-200/70 duration-[100ms] ease-in">
           <div className="w-[10%] m-auto  pr-2 text-center border-zinc-300 border-r">
               <span className="font-zodiac text-[23px]">
                a
            </span>
           </div>
                    <div className="w-[95%]">
                        <p>
            <span className="text-yellow-700">
                Shukra enters in Anuradha
            </span>
                            {" "}
                            (Today)
                        </p>
                        <p className="text-zinc-600 text-sm">
                            November 14, 2022, Monday at  12:07 PM
                        </p>
                    </div>
                </td>
            </>
    )
}