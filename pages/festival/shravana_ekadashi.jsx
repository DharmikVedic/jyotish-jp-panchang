import React, {useCallback, useEffect, useState} from "react";
import { FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard, {Detail} from "../../components/festival/festivalDetailCard";
import {useRouter} from "next/router";
import {Decode} from "../../components/utils/decode";
import FestivalFormdata from "../../components/festival/festivalFilter";

export default function SheavanaEkadashi(){
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState("");
    const [input,setinput] = useState({});
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
            {loader || data == ""?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-14">
                        <FestivalDetailCard festival_name={input?.japanese}  date={data?.festival_date}/>
                        <Detail festival_date={data?.festival_date} harivarsra={data?.hari_vasara} muhurat={data?.paran_muhurta} tithistart={data?.tithi_start} tithiend={data?.tithi_end} name={input?.japanese}/>
                    </div>
                </div>
            }
        </>
    )
}