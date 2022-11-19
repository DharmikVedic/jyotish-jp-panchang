import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Decode} from "../../components/utils/decode";
import {FetchAPI} from "../../components/utils/fetchapi";

export  default function AhoiAshtami(){
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
        <div>

        </div>
    )
}