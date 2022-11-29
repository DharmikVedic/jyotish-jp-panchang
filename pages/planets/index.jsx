import React, {useCallback, useEffect, useState} from "react";
import {FetchAPI} from "../../components/utils/fetchapi";
import CommonChart from "../../components/planets/charts";
import PlanetTable from "../../components/planets/planetTable";
import Loader from "../../components/utils/loader";
import Formdata from "../../components/table/tableFilter";
import usePlace from "../../components/context/usePlace";

export default function PLanets(){
    const dateobj = new Date();
    const {place} = usePlace();

    const defaultobject = {
        day: dateobj.getDate(),
        hour: dateobj.getHours(),
        min: dateobj.getMinutes(),
        month: dateobj.getMonth()+1,
        year: dateobj.getFullYear(),
        ...place
    };
    const [loader,setloader] = useState(true);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState({planets:""});

    useEffect(()=>{
        let mouted = true;
        if(mouted && place){
            Apicall({...input,...place});
        setinput(prev=> ({...prev,...place}));
        }
        return()=> {mouted = false};
    },[place]);


    const Apicall =async(input)=>{
        const planetsData = await FetchAPI("planets",input);
        setdata({planets:planetsData });
        setloader(false);
    }


    const getdata = useCallback(async (datestring, res)=>{
        setloader(true);
        setinput(prev => ({...prev, ...res }));
        await Apicall({...input,...res});
    },[]);


    return(
        <>
            <Formdata getinput={getdata}/>
            {
                loader ? <Loader/>
                    :
                    <div className="w-full bg-zinc-100 min-h-screen pt-10 pb-20">
                        <div
                            className="max-w-[800px]  mx-auto w-full px-5 md:flex-row flex-col flex md:gap-14 gap-5 justify-between items-center">
                            <CommonChart style="items-center md:items-start" handleCallback={true} userdata={input}
                                         chartId="D1"/>
                            <CommonChart style="items-center md:items-end" userdata={input} handleCallback={true}
                                         chartId="D7"/>
                        </div>
                        <div className="mt-10 overflow-x-scroll max-w-[1200px] mx-auto px-5">
                            <PlanetTable data={data.planets}/>
                        </div>
                    </div>
            }
            </>
    )
}