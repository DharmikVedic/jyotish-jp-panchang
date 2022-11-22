import React, {useCallback, useEffect, useState} from "react";
import { FetchAPI} from "../../components/utils/fetchapi";
import Formdata from "../../components/table/tableFilter";
import Loader from "../../components/utils/loader";
import {HoraTable} from "../../components/panchang/chaughadiyatable";

export default function Horaghadiya(){
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
    const [date,setdate]= useState('');
    const [loader,setloader] = useState(false);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState(null);


    useEffect(()=>{
        let mouted = true;
        if(mouted){
            Apicall();
        }
        return()=> {mouted = false};
    },[input]);


    const Apicall =async()=>{
        const chaughadiya = await FetchAPI("hora_muhurta",input);
        setdata(chaughadiya);
        setloader(false);
    }
    const getdata = useCallback(async (datestring, res)=>{
        setloader(true);
        setdate(datestring)
        setinput(prev => ({...prev, ...res }));
        await Apicall({...input,...res});
    },[]);



    return(
        <>
            <Formdata getinput={getdata}/>
            {loader || !data ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="min-h-screen">
                    <div className="bg-gradient-to-r from-sky-500 to-red-500 w-full py-5">
                        <h1 className="text-2xl md:text-3xl text-white max-w-6xl mx-auto px-5 md:px-10 font-bold">
                            ホーラー・ムフールタ ,{" "} {date}
                        </h1>
                    </div>

                    <div className="pb-20 pt-10 md:py-20 px-5">
                        <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-10">
                            <HoraTable type="day" name="日中のホーラー" hora={data && data?.hora?.day}/>
                            <HoraTable
                                type="night"
                                name="夜間のホーラー"
                                hora={data && data?.hora?.night}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}