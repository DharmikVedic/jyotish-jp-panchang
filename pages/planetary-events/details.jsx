import PlanetaryMonthTable from "../../components/planetary_position/planetaryMonthTable";
import React, {useCallback, useEffect, useState} from "react";
import FormMonthdata from "../../components/table/tableFilterMonth";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FormYeardata from "../../components/planetary_position/planetaryYearFilter";
import PlanetaryEventsYearlyCard from "../../components/planetary_position/planetaryEventYearlyCard";

const dataaa = [
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 5,
        "planet_name": "Venus",
        "event_text": "Venus enters in Vishakha.",
        "event_start_date": "November 03, 2022, Thursday at 20:44",
        "event_start_ms": 1667508287061
    },
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 0,
        "planet_name": "Sun",
        "event_text": "Sun enters in Vishakha.",
        "event_start_date": "November 06, 2022, Sunday at 20:26",
        "event_start_ms": 1667766388019
    },
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 3,
        "planet_name": "Mercury",
        "event_text": "Mercury enters in Vishakha.",
        "event_start_date": "November 07, 2022, Monday at 15:17",
        "event_start_ms": 1667834252229
    },
    {
        "event_name": "SIGN_TRANSIT",
        "planet_id": 5,
        "planet_name": "Venus",
        "event_text": "Venus enters in Scorpio.",
        "event_start_date": "November 11, 2022, Friday at 20:09",
        "event_start_ms": 1668197360489
    },
    {
        "event_name": "SIGN_TRANSIT",
        "planet_id": 3,
        "planet_name": "Mercury",
        "event_text": "Mercury enters in Scorpio.",
        "event_start_date": "November 13, 2022, Sunday at 21:19",
        "event_start_ms": 1668374376106
    },
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 5,
        "planet_name": "Venus",
        "event_text": "Venus enters in Anuradha.",
        "event_start_date": "November 14, 2022, Monday at 11:55",
        "event_start_ms": 1668426932258
    },
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 3,
        "planet_name": "Mercury",
        "event_text": "Mercury enters in Anuradha.",
        "event_start_date": "November 16, 2022, Wednesday at 00:02",
        "event_start_ms": 1668556950954
    },
    {
        "event_name": "SIGN_TRANSIT",
        "planet_id": 0,
        "planet_name": "Sun",
        "event_text": "Sun enters in Scorpio.",
        "event_start_date": "November 16, 2022, Wednesday at 19:15",
        "event_start_ms": 1668626103993
    },
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 0,
        "planet_name": "Sun",
        "event_text": "Sun enters in Anuradha.",
        "event_start_date": "November 20, 2022, Sunday at 02:34",
        "event_start_ms": 1668911646167
    },
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 3,
        "planet_name": "Mercury",
        "event_text": "Mercury enters in Jyeshtha.",
        "event_start_date": "November 24, 2022, Thursday at 13:40",
        "event_start_ms": 1669297210837
    },
    {
        "event_name": "NAKSHATRA_TRANSIT",
        "planet_id": 5,
        "planet_name": "Venus",
        "event_text": "Venus enters in Jyeshtha.",
        "event_start_date": "November 25, 2022, Friday at 02:56",
        "event_start_ms": 1669344994244
    }
]


export default function PlanetaryEvents(){
    const dateobj = new Date();
    const defaultobject = {
        country: "japan",
        date: 1,
        hour: dateobj.getHours(),
        lat: 35.6761919,
        lon: 139.6503106,
        min: dateobj.getMinutes(),
        month: dateobj.getMonth()+1,
        timezone: 9,
        year: dateobj.getFullYear(),
    };
    const [loader,setloader] = useState(false);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState(null);


    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(()=>{
        let mouted = true;
        if(mouted){
            //Apicall(input);
        }
        return()=> {mouted = false};
    },[]);


    // const Apicall =async(input)=>{
    //     const events = await FetchAPI("vedic_planetary_events",input);
    //     setdata(events);
    //     setloader(false);
    // }


    // const getdata = useCallback(async (datestring, res)=>{
    //     setloader(true);
    //     setinput(prev => ({...prev, ...res }));
    //     await Apicall({...input,...res});
    // },[]);


    return(
        <>
            <FormYeardata getinput={()=> ""}/>
            {/* formdata */}
            {loader  ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="min-h-screen bg-zinc-100">
                    <div className="pt-[50px] px-5 pb-[100px]">
                        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5 w-full mx-auto">
                            {[...Array(20)].map((item,i)=>(
                                <PlanetaryEventsYearlyCard index={i} key={i}/>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}