import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import {convert_Date_to_redable} from "../../components/festival/festivalCard";

export  default function Pongal(){
    const commonObj = {
        festival_date: "2022-11-19",
        sankranti_moment : '12:26 PM',
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
                        <FestivalDetailCard festival_name="Dhanu Sankranti "  date={"2022-11-19"}/>
                        <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
                            <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                               Thai Pongal Muhurta
                            </div>
                            <h6 className="text-center md:text-lg text-base ">
                                Thai Pongal  <span className="text-red-600 font-semibold">on {convert_Date_to_redable(data.festival_date)}</span>
                            </h6>
                            {/* punya kaal */}
                            <p className="md:text-2xl text-center text-xl text-yellow-600">
                                Thai Pongal Sankranti Moment - {data.sankranti_moment}
                            </p>
                            </div>
                    </div>

                </div>
            }
        </>
    )
}