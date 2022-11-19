import React, {useCallback, useEffect, useState} from "react";
import { FetchAPI} from "../../components/utils/fetchapi";
import FestivalFormdata from "../../components/festival/festivalFilter";
import Loader from "../../components/utils/loader";
import FestivalDetailCard, {Detail} from "../../components/festival/festivalDetailCard";

export default function FestivalDetail(){
    const dateobj = new Date();
    const defaultobject = {
        country: "japan",
        day: dateobj.getDate(),
        hour: dateobj.getHours(),
        lat: 35.6761919,
        lon: 139.6503106,
        min: dateobj.getMinutes(),
        month: dateobj.getMonth()+1,
        tzone: 9,
        year: dateobj.getFullYear(),
    };
    const [loader,setloader] = useState(false);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState({festivals:""});
    const [year,setyear] = useState(dateobj.getFullYear());




    useEffect(()=>{
        let mouted = true;
        if(mouted){
            //Apicall(input);
        }
        return()=> {mouted = false};
    },[]);


    const Apicall =async(input)=>{
        setloader(true);
        const panchang = await FetchAPI("advanced_panchang",input);
        const tamil_panchang = await FetchAPI("tamil_panchang",input);
        setdata({panchang:panchang,tamil:tamil_panchang});
        setloader(false);
    }


    const getdata = useCallback(async (datestring, res)=>{
        setinput(prev => ({...prev, ...res }));
        setyear(datestring)
        //Apicall({...input,...res,...tzoneval});
    },[]);


    return(
        <>
            <FestivalFormdata getinput={getdata} />
            {loader ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-14">
                        <FestivalDetailCard/>
                        <Detail/>
                    </div>
                </div>
            }
        </>
    )
}