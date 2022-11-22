import React, {useEffect, useState} from "react";
import Loader from "./loader";
import {FetchAPI} from "./fetchapi";

export default function CommonLoadrFunction({children, passdata,apinames,reqBody}) {
    const [loader, setloader] = useState(true);

    const handleLoader =(val)=>{
        setloader(val)
    }


    useEffect(() => {
        let shouldUpdate = true;

        // const controller = new AbortController();
        // const { signal } = controller;
        if (apinames.length > 0 && reqBody && shouldUpdate) {
            APICall()
        }
        return()=> {
            shouldUpdate = false
        };
    }, [])

    const APICall =async(signal)=>{
        setloader(true);
        try {
            let d = {};
            const multiple_api_call = await Promise.all(apinames.map(async (item) => {
                return await FetchAPI(item, reqBody, handleLoader, signal)
            }))
            for (let i = 0; i < multiple_api_call.length; i++) {
                d[apinames[i]] = multiple_api_call[i];
            }
            passdata({status:true,data:d});
            return true;
        }
        catch(err){
            passdata({status:false,msg:err.message});
            return false
        }
    }

    return <>{loader ? <Loader  /> : <>{children}</>}</>
}