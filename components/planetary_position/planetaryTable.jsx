import PanchangCard from "../panchang/dailyPanhang";
import React from "react";
import {icon} from "./utils";

export default function PlanetaryPosition({events}){
    return(
        <>
            <PanchangCard  link="/planetary-events" style="bg-sky-500/80" title="Upcoming Planetary Events">
                    <div className="divide-y divide-zinc-300">
                        {events.slice(0,5).map((item, i) => (
                                <TrEntry key={i} data={item}/>
                        ))}
                    </div>
            </PanchangCard>
            </>
    )
}

export function TrEntry({data}){
    return(
                <div className="px-3 py-2  flex gap-4 hover:bg-zinc-200/70 duration-[100ms] ease-in">
           <div className="w-[10%] m-auto  pr-2 text-center border-zinc-300 border-r">
               <span className="font-zodiac text-[23px]">
                   {icon[data.planet_id]}
            </span>
           </div>
                    <div className="w-[95%]">
                        <p>
            <span className="text-yellow-700">
                {data.event_text}
            </span>
                        </p>
                        <p className="text-zinc-600 text-sm">
                            {data.event_start_date}
                        </p>
                    </div>
                </div>
    )
}