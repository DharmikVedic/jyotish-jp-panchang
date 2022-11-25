import React, {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import {Decode} from "../../components/utils/decode";
import {convert_Date_to_redable} from "../../components/festival/festivalCard";
import FestivalFormdata from "../../components/festival/festivalFilter";

export  default function VijayaDashami(){
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

    const getdata = useCallback(async (datestring, res)=>{
        const windowquery = new URLSearchParams(window.location.search);
        const decode = Decode(windowquery.get('q'));
        const parse = JSON.parse(decode);
        setinput(prev=> ({...prev,...parse,...res}))
        await Apicall({...parse,...res,festival_date:""});
    },[]);

    return(
        <>
            <FestivalFormdata getinput={getdata} />
            {loader || input=="" ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
                        <FestivalDetailCard festival_name="Vijayadashami"  date={data?.festival_date}/>
                        <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
                            <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                                Vijayadashami Muhurat
                            </div>
                            <h6 className="text-center md:text-lg">
                                Vijayadashami <span className="text-red-600 font-semibold">on {convert_Date_to_redable(data?.festival_date)}</span>
                            </h6>
                            {/* punya kaal */}
                            <div className="flex bg-zinc-50 border-2 md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                                <div>

                                    <p className="text-yellow-600 font-semibold">
                                        Vijay Muhurat - {data?.muhurta?.muhurta_start_time} to {data?.muhurta?.muhurta_end_time}
                                    </p>
                                    {/*<p className="text-base text-zinc-500">*/}
                                    {/*    Duration - 08 Hours 42 Mins*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                            <div className="flex bg-zinc-50 border-2 md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                                <div>

                                    <p className="text-yellow-600 font-semibold">
                                        Aparahna Puja Time - {data?.puja_time?.start_time} to {data?.puja_time?.start_time}
                                    </p>

                                </div>
                            </div>
                            <p >
                                Dashami Tithi Begins - <span className="text-yellow-600">{data?.tithi_start}</span>
                                <br/>
                                Dashami Tithi Ends - <span className="text-yellow-600">{data?.tithi_end}</span>
                            </p>
                        </div>


                    </div>
                </div>
            }
        </>
    )
}