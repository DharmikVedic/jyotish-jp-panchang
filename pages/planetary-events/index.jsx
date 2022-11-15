import PlanetaryMonthTable from "../../components/planetary_position/planetaryMonthTable";
import React, {useCallback, useEffect, useState} from "react";
import FormMonthdata from "../../components/table/tableFilterMonth";
import {FetchApi, FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";

export default function PlanetaryEvents(){
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
    const [data,setdata] = useState({});

    useEffect(()=>{
        let mouted = true;
        if(mouted){
            //Apicall(input);
        }
        return()=> {mouted = false};
    },[]);


    // const Apicall =async(input)=>{
    //     setloader(true);
    //     const panchang = await FetchAPI("advanced_panchang",input);
    //     const tamil_panchang = await FetchAPI("tamil_panchang",input);
    //     setdata({panchang:panchang,tamil:tamil_panchang});
    //     setloader(false);
    // }

    const Timezone = async  (input) =>{
        const date = input.month+"-"+input.day+"-"+input.year;
        if(input.country !== "japan"){
            const timezone = await FetchApi({apiName: "timezone_with_dst",userData:{latitude: parseFloat(input.lat),longitude:parseFloat(input.lon),date:date}});
            setinput(prev=> ({...prev,tzone: timezone.response.timezone }));
            return {tzone: timezone.response.timezone };
        }
    }


    const getdata = useCallback(async (datestring, res)=>{
         // setloader(true);
        setinput(prev => ({...prev, ...res }));
        const tzoneval = await Timezone(res);
        // setloader(false)
       // await Apicall({...input,...res,...tzoneval});
    },[]);

console.log(input)

    return(
        <>
            <FormMonthdata getinput={getdata}/>
            {/* formdata */}
            {loader ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="min-h-screen">
                    <div className="pt-[50px] pb-[100px]">
                        <div className="max-w-4xl w-full mx-auto">
                            <PlanetaryMonthTable/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}