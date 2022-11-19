import {useRouter} from "next/router";
import React, {useCallback, useEffect, useState} from "react";
import {FetchAPI} from "../../components/utils/fetchapi";
import FormYeardata from "../../components/planetary_position/planetaryYearFilter";
import Loader from "../../components/utils/loader";
import PlanetaryEventsYearlyCard from "../../components/planetary_position/planetaryEventYearlyCard";
import {signSecondName} from "./sign";
import Sample from "../sample";



export default function Nakshatra(){
const dateobj = new Date();
    const defaultobject = {
        timezone: 9,
        year: dateobj.getFullYear(),
    };
    const [planetname,setplanet] = useState("");
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState(null);
    const [input,setinput] = useState(defaultobject);

    const router = useRouter();
    const query = router.query;

    useEffect(()=>{
        let mouted = true;
        if(mouted) {
            if (query.planet) {
                setplanet(query.planet);
                Apicall({...input,planet:query.planet});
            }
            //router.push("/festival");
        }
        return()=> {mouted = false};
    },[query.planet]);

    const Apicall =async(input)=>{
        setloader(true);
        const yearlyPlanet = await FetchAPI("vedic_nakshatra_gochara",input);
        setdata(yearlyPlanet);
        setloader(false);
    }

    const getdata = useCallback(async (datestring, res)=>{
        //setinput(prev => ({...prev, ...res }));
        const param = new URLSearchParams(window.location.search);
        const d = param.get('planet')
        await Apicall({...res,planet:d});
    },[planetname]);

    return(
        <>
            <FormYeardata getinput={getdata}/>
            {/* formdata */}
            {loader  ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="min-h-screen bg-zinc-100">
                    <div className="pt-[50px] flex flex-col items-center gap-10 px-5 pb-[100px]">
                        <h1 className="md:text-3xl text-zinc-800 capitalize text-2xl font-bold">
                            {planetname} ({signSecondName[planetname]}) Nakshatra Transits
                        </h1>
                        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5 w-full mx-auto">
                            {data?.transits.map((item,i)=>(
                                <PlanetaryEventsYearlyCard index={i} data={item} key={i}/>
                            ))}
                        </div>
                        <div className="w-full">
                            <Sample text="Transit To Nakshatra" />
                            <Sample signpage={true} text="Transit To Sign" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}