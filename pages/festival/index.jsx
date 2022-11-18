import React, {useCallback, useEffect, useState} from "react";
import FestivalFormdata from "../../components/festival/festivalFilter";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FeativalYearCard from "../../components/festival/festivalCard";
import {month} from "../../components/table/tableFilter";

export default function Festival(){
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
        <div>
<FestivalFormdata getinput={getdata} />
            {loader  ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 pt-10 pb-20 min-h-screen">
                <div className="max-w-4xl flex flex-col gap-5 mx-auto px-5">
                    {month.map((item,i)=>
                        <FeativalYearCard year={year} monthName={item} key={i}/>
                    )}
                </div>
                </div>
            }
        </div>
    )
}