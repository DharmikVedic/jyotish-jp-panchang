import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import {MuhuratDetail} from "../../components/festival/utilsComponents";
import {Decode} from "../../components/utils/decode";

export  default function AkshayaTritiya(){
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
            {loader || data==""?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
                        <FestivalDetailCard festival_name="Akshaya Tritiya"  date={input.festival_date}/>
                        <MuhuratDetail muhurtastart={data?.muhurta_start_time} tithiname="Tritiya" muhurtend={data?.muhurta_end_time} festival_date={input?.festival_date} tithiend={data?.tithi_start}  tithistart={data?.tithi_end} name="Akshaya Tritiya"/>
                    </div>
                </div>
            }
        </>
    )
}