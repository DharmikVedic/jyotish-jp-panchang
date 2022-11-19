import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import {SankrantiDetail} from "../../components/festival/utilsComponents";

export  default function MeshaSankranti(){
    const commonObj = {
        sankranti_moment : '12:26 PM',
        punya_kal : {
            start_time : '08:05 AM',
            end_time : '04:47 PM'
        },
        maha_punya_kal : {
            start_time : '08:05 AM',
            end_time : '04:47 PM'
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
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
                        <FestivalDetailCard festival_name="Mesha Sankranti "  date={"2022-11-19"}/>
                        <SankrantiDetail festival_date="2022-11-19" moment={data.sankranti_moment}  punya={data.punya_kal} mahapunya={data.maha_punya_kal} name="Mesha Sankranti "/>
                    </div>
                </div>
            }
        </>
    )
}