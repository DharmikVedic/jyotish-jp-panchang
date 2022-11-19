import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import {MuhuratArrayDetail, tithiid} from "../../components/festival/utilsComponents";
import {Decode} from "../../components/utils/decode";
import {convert_Date_to_redable} from "../../components/festival/festivalCard";

export  default function NarasimaJayanti(){
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState("");
    const [input,setinput] = useState("");
    const router = useRouter();
    const query = router.query;

    useEffect(()=>{
        let mouted = true;
        if(mouted) {
            if (query.q) {
                const decode = Decode(query.q);
                const parse = JSON.parse(decode);
                setinput(parse);
                Apicall(parse);
            }
            //router.push("/festival");
        }
        return()=> {mouted = false};
    },[query]);


    const Apicall =async(input)=>{
        setloader(true);
        const d = await FetchAPI("festival_muhurta",input);
        setdata(d);
        setloader(false);
    }

    return(
        <>
            {loader ||data=="" ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
                        <FestivalDetailCard festival_name="Narasima Jayanti"  date={input?.festival_date}/>
                        <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
                            <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                                Narasima Jayanti Muhurta
                            </div>
                            <h6 className="text-center md:text-lg">
                                Narasima Jayanti <span className="text-red-600 font-semibold">on {convert_Date_to_redable(input?.festival_date)}</span>
                            </h6>
                            {/* punya kaal */}
                                <div className="flex bg-zinc-50 border-2 md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                                    <div>

                                        <p className="text-yellow-600 font-semibold">
                                            Narasimha Jayanti Sayana Kala Puja Time - {data?.muhurta?.muhurta_start_time} to {data?.muhurta?.muhurta_end_time}
                                        </p>
                                        {/*<p className="text-base text-zinc-500">*/}
                                        {/*    Duration - 08 Hours 42 Mins*/}
                                        {/*</p>*/}
                                    </div>
                                </div>
                            <div className="flex bg-zinc-50 border-2 md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                                <div>

                                    <p className="text-yellow-600 font-semibold">
                                        Next Day Parana Time for Narasimha Jayanti - {data?.paran_time}
                                    </p>

                                </div>
                            </div>
                            <p>
                                Chaturdashi Tithi Begins - <span className="text-yellow-600">{data?.tithi_start}</span>
                                <br/>
                                Chaturdashi Tithi Ends - <span className="text-yellow-600">{data?.tithi_end}</span>
                            </p>
                        </div>


                    </div>
                </div>
            }
        </>
    )
}