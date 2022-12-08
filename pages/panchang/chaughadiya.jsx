import React, {useCallback, useEffect, useState} from "react";
import {FetchAPI} from "../../components/utils/fetchapi";
import Formdata from "../../components/table/tableFilter";
import Loader from "../../components/utils/loader";
import ChaugadiyaTable from "../../components/panchang/chaughadiyatable";
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
    const [date,setdate]= useState('');
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
        const chaughadiya = await FetchAPI("chaughadiya_muhurta",input);
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
                            チャウガディヤー・ムフールタ ,{" "} {date}
                        </h1>
                    </div>

                    <div className="pb-20 pt-10 md:py-20 px-5">
                        <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-10">
                            <ChaugadiyaTable type="day" name="日中のチャウガディヤー" chaughadiya={data && data?.chaughadiya?.day}/>
                            <ChaugadiyaTable
                                type="night"
                                name="夜間のチャウガディヤー"
                                chaughadiya={data && data?.chaughadiya?.night}
                            />
                        </div>
                        <div className="flex md:flex-row flex-col gap-5 md:gap-10 justify-center pt-20 pb-10  max-w-6xl mx-auto">
                            <p className="flex gap-2  text-lg md:text-xl">
                                <span className="w-[30px] h-[30px] bg-red-500">
                            </span>
                                凶のチャウガディヤー
                            </p>
                            <p className="flex gap-2  text-lg md:text-xl">
                                <span className="w-[30px] h-[30px] bg-green-400">
                            </span>
                                大吉のチャウガディヤー

                            </p>
                            <p className="flex gap-2  text-lg md:text-xl">
                                <span className="w-[30px] h-[30px] bg-sky-400">
                            </span>
                                吉のチャウガディヤー
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}