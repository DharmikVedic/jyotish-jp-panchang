import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import {MuhuratArrayDetail} from "../../components/festival/utilsComponents";

export  default function VijayaDashami(){
    const commonObj = {
        festival_date:"2022-11-19",
        muhurta:[{
            muhurta_start_time: '08:05 AM',
            muhurta_end_time: '04:47 PM'
        },{
            muhurta_start_time: '08:05 AM',
            muhurta_end_time: '04:47 PM'
        }],
        tithi : {
            tithi_id:11,
            tithi_start_time : '08:05 AM',
            tithi_end_time : '04:47 PM'
        }
    }
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState(commonObj);
    const router = useRouter();
    const query = router.query;

    useEffect(()=>{
        let mouted = true;
        if(mouted) {
            if (query.year) {
                // Apicall();
            }
            //router.push("/festival");
        }
        return()=> {mouted = false};
    },[]);


    const Apicall =async(input)=> {
        setloader(true);
        const panchang = await FetchAPI("", input);
        setdata("");
        setloader(false);
    }

    return(
        <>
            {loader ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
                        <FestivalDetailCard festival_name="Vijaya Dashami"  date={data.festival_date}/>
                        <MuhuratArrayDetail muhurattext={["Vijay Muhurat","Aparahna Puja Time"]} hightlight="Muhurat" muhurta={data.muhurta} festival_date={data.festival_date}  tithi={data.tithi} name="Vijaya Dashami"/>
                    </div>
                </div>
            }
        </>
    )
}