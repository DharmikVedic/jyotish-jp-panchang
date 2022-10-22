import React, {useEffect, useState} from "react";
import {FetchApi, FetchAPI} from "../../components/utils/fetchapi";
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
        setloader(true);
        const chaughadiya = await FetchAPI("hora_muhurta",input);
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


    const getdata = (datestring, res) => {
        setdate(datestring);
        setinput(prev => ({...prev, ...res }));
        Timezone(res);
    };




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
                            <HoraTable type="day" name="デイ・チョガディヤ" hora={data && data?.hora?.day}/>
                            <HoraTable
                                type="night"
                                name="夜のチョガディヤ"
                                hora={data && data?.hora?.night}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}