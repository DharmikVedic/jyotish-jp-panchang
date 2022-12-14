import PlanetaryMonthTable from "../../components/planetary_position/planetaryMonthTable";
import React, {useCallback, useEffect, useState} from "react";
import FormMonthdata from "../../components/table/tableFilterMonth";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import Sample from "../sample";
import usePlace from "../../components/context/usePlace";

export default function PlanetaryEvents({events}){
    const dateobj = new Date();
    const {place} = usePlace();
    const defaultobject = {
        date: 1,
        hour: dateobj.getHours(),
        min: dateobj.getMinutes(),
        month: dateobj.getMonth()+1,
        year: dateobj.getFullYear(),
        ...place
    };
    const [loader,setloader] = useState(false);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState(events);

    useEffect(()=>{
        let mouted = true;
        if(mouted && place){
            setinput(prev=> ({...prev,...place}));
        }
        return()=> {mouted = false};
    },[place]);


    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    const Apicall =async(input)=>{
        const events = await FetchAPI("vedic_planetary_events",input);
        setdata(events);
        setloader(false);
    }


    const getdata = useCallback(async (datestring, res)=>{
        setloader(true);
        setinput(prev => ({...prev, ...res }));
        await Apicall({...input,...res});
    },[]);


    return(
        <>
            <FormMonthdata getinput={getdata}/>
            {/* formdata */}
            {loader  ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="min-h-screen bg-zinc-50">
                    <div className="pt-[50px] px-5 pb-[100px]">
                        <div className="max-w-3xl w-full mx-auto">
                            {data &&
                                <>
                            <PlanetaryMonthTable year={input.year} ml={mL[input.month - 1]} data={data}/>
                                    <div className="w-full">
                               <Sample signpage={true} text="Transit To Sign" />
                               <Sample text="Transit To Nakshatra" />
                           </div>
                            </>
                            }
                            </div>
                    </div>
                </div>
            }
        </>
    )
}


export async function getStaticProps(context) {
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

    // planetary events api call
    const PlnetaryEventsApicall =async(input)=>{
        const events = await FetchAPI("vedic_planetary_events",input);
        return events;
    }

    const getPlanetaryEvents = await PlnetaryEventsApicall(defaultobject);
    return {
        props: {
            events:getPlanetaryEvents
        },
    }
}