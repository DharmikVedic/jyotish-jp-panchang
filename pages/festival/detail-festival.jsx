import React, {useEffect, useState} from "react";
import { FetchAPI} from "../../components/utils/fetchapi";
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
    const [data,setdata] = useState("");
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
        const panchang = await FetchAPI("",input);
        setdata("");
        setloader(false);
    }


    const arr = [
        {start_time:"12:21 PM",end_time:"2:43 PM"}
    ]

    return(
        <>
            {loader ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-14">
                        <FestivalDetailCard festival_name="Pausha Putrada Ekadashi "  date={"2022-11-19"}/>
                        <Detail festival_date="2022-11-19" harivarsra="12:54 PM" muhurat={arr} tithistart="08:35 AM on Mar 25, 2025" tithiend="08:35 AM on Mar 25, 2025" name="Pausha Putrada Ekadashi "/>
                    </div>
                </div>
            }
        </>
    )
}