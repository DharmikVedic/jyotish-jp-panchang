import React, {useCallback, useEffect, useState} from "react";
import { FetchAPI} from "../../components/utils/fetchapi";
import Formdata from "../../components/table/tableFilter";
import Loader from "../../components/utils/loader";
import {formatAMPM} from "../../components/json/country";
import usePlace from "../../components/context/usePlace";

export default function Chaughadiya(){
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
    const [datestring,setdatestring]= useState("");
    const [loader,setloader] = useState(false);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState(null);


    useEffect(()=>{
        let mouted = true;
        if(mouted && place){
            Apicall({...input,...place});
        }
        return()=> {mouted = false};
    },[place]);


    const Apicall =async(input)=>{
        const chaughadiya = await FetchAPI("advanced_panchang",input);
        setdata(chaughadiya);
        setloader(false);
    }


    const getdata = useCallback(async (datestring, res)=>{
        setloader(true);
        setdatestring(datestring)
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
                            アビジタ・ムフールタ ,{" "} {datestring}
                        </h1>
                    </div>

                    <div className="pb-20 pt-10 md:py-20 px-5">
                        <div className="max-w-[450px] gap-3 mx-auto md:p-10 p-5 flex items-center justify-center flex-col bg-yellow-100 rounded">
                                <h6 className="text-zinc-800 font-semibold">
                                    アビジタ・ムフールタ
                                </h6>
                                <img className="h-[100px]" src="/imgs/abhijit.png" alt=" アビジタ・ムフールタ"/>
                        <p className="text-zinc-600 md:text-xl text-lg">
    <span className="text-yellow-600">{formatAMPM(data?.abhijit_muhurta?.start)}</span>{" "} to   <span className="text-yellow-600">  {formatAMPM(data?.abhijit_muhurta?.end)}</span>
</p>
                            <p className="md:text-lg">
                                {datestring}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}