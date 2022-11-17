import PanchangCard from "../panchang/dailyPanhang";
import React, {useEffect, useState} from "react";
import {icon} from "./utils";
import {FetchAPI} from "../utils/fetchapi";
import Loader from "../utils/loader";

export default function PlanetaryPosition(){
    const dateobj = new Date();
    const defaultobject = {
        country: "japan",
        date: dateobj.getDate(),
        hour: dateobj.getHours(),
        lat: 35.6761919,
        lon: 139.6503106,
        min: dateobj.getMinutes(),
        month: dateobj.getMonth()+1,
        timezone: 9,
        year: dateobj.getFullYear(),
    };
    const [loader,setloader] = useState(true);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState(null);



    useEffect(()=>{
        let mouted = true;
        if(mouted){
            Apicall(input);
        }
        return()=> {mouted = false};
    },[]);


    const Apicall =async(input)=>{
        const events = await FetchAPI("vedic_planetary_events",input);
        setdata(events);
        setloader(false);
    }


    return(
        <>
            <PanchangCard  link="/planetary-events" style="bg-sky-500/80" title="Upcoming Planetary Events">
                {loader ? <div className="mt-[40px]"><Loader/></div> :
                    <div className="divide-y divide-zinc-300">
                        {data.slice(0,5).map((item, i) => (
                                <TrEntry key={i} data={item}/>
                        ))}
                    </div>
                }
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