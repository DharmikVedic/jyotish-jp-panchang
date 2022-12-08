import React, {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import {Decode} from "../../components/utils/decode";
import FestivalFormdata from "../../components/festival/festivalFilter";

export  default function MysoreDasara(){
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
            {loader ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
                        {/*<FestivalDetailCard festival_name="Mysore Dasara"  date={data.festival_date}/>*/}
                        {/*<MuhuratArrayDetail muhurattext={["Raksha Bandhan Thread Ceremony Time","Aparahna Time Raksha Bandhan Muhurat"]} hightlight="Muhurat" muhurta={data.muhurta} festival_date={data.festival_date}  tithi={data.tithi} name="Mysore Dasara"/>*/}
                    </div>
                </div>
            }
        </>
    )
}