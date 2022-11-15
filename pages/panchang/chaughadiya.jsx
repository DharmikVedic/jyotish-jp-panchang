import React, {useCallback, useEffect, useState} from "react";
import {FetchApi, FetchAPI} from "../../components/utils/fetchapi";
import Formdata from "../../components/table/tableFilter";
import Loader from "../../components/utils/loader";
import ChaugadiyaTable from "../../components/panchang/chaughadiyatable";

export default function Chaughadiya(){
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
        const chaughadiya = await FetchAPI("chaughadiya_muhurta",input);
        setdata(chaughadiya);
        setloader(false);
    }

    const Timezone = async  (input) =>{
        const date = input.month+"-"+input.day+"-"+input.year;
        if(input.country !== "India"){
            const timezone = await FetchApi({apiName: "timezone_with_dst",userData:{latitude: parseFloat(input.lat),longitude:parseFloat(input.lon),date:date}});
            setinput(prev=> ({...prev,tzone: timezone.response.timezone }));
        }
    }


    const getdata = useCallback(async (datestring, res)=>{
        setloader(true);
        setdate(datestring)
        setinput(prev => ({...prev, ...res }));
        const tzoneval = await Timezone(res);
        await Apicall({...input,...res,...tzoneval});
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
                            <ChaugadiyaTable type="day" name="デイ・チョガディヤ" chaughadiya={data && data?.chaughadiya?.day}/>
                            <ChaugadiyaTable
                                type="night"
                                name="夜のチョガディヤ"
                                chaughadiya={data && data?.chaughadiya?.night}
                            />
                        </div>
                        <div className="flex md:flex-row flex-col gap-5 md:gap-10 justify-center pt-20 pb-10  max-w-6xl mx-auto">
                            <p className="flex gap-2  text-lg md:text-xl">
                                <span className="w-[30px] h-[30px] bg-red-500">
                            </span>
                                不吉なチャガディヤ
                            </p>
                            <p className="flex gap-2  text-lg md:text-xl">
                                <span className="w-[30px] h-[30px] bg-green-400">
                            </span>
                                縁起の良いチャガディヤ

                            </p>
                            <p className="flex gap-2  text-lg md:text-xl">
                                <span className="w-[30px] h-[30px] bg-sky-400">
                            </span>
                                良いチョガディヤ
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}