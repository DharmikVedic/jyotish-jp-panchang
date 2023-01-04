import React, {useEffect, useState} from "react";
import {FetchAPI} from "./utils/fetchapi";
import {convertDayMonthYearDate, dateDifference, getMultipleDate} from "./utils/dateDifference";
import PanchangCard, { Text2} from "./panchang/dailyPanhang";
import Loader from "./utils/loader";

export default function Festival({data,inputdata}){
    // const [festival,setfestival] = useState(data);
    // const [loader,setloader]  = useState(false);

    // const handleLoader =(val)=>{
    //     setloader(val);
    // }

    // useEffect(()=>{
    //     let mouted = true;
    //     if(mouted) {
    //         //APICall(20);
    //     }
    //     return()=> {mouted=false};
    // },[]);


    // const APICall =async(val)=>{
    //     setloader(true);
    //     try {
    //         let d = [];
    //         const initialData = getMultipleDate(val-1);
    //         const multiple_api_call = await Promise.all([...Array(val)].map(async (_,j) => {
    //             return await FetchAPI("panchang_festival", initialData[j], handleLoader)
    //         }));
    //         for (let i = 0; i < multiple_api_call.length; i++) {
    //            if(multiple_api_call[i].status){
    //                d.push({festivals:multiple_api_call[i]?.festivals,date:initialData[i]});
    //            }
    //         }
    //         setfestival(d);
    //         return true;
    //     }
    //     catch(err){
    //         return {status:false,msg:err.message};
    //     }
    // }
    //
    const getFestivalDay =(dateObject)=>{
        const today = convertDayMonthYearDate(inputdata);
        const pastdate = convertDayMonthYearDate(dateObject);
        return dateDifference(today,pastdate);
    }

    return(
        <>
                <PanchangCard link="/festival" style="bg-sky-500/80" title="今後のウパヴァーサと祭日">
                    {data?.festivals?.length == 0 ?
                        <div className="flex justify-center pb-10 items-center h-full text-2xl">
                            <h3>
                                No festival found
                            </h3>
                        </div>
                        :
                        <div className="px-5 py-2 max-h-[600px] overflow-y-scroll">
                            {data?.festivals.map((item, i) => (
                                            <Text2 inputdata={inputdata} key={i} text={item.japanese} data={item} value={getFestivalDay({year:item.year,month:item.month,day:item.date})}/>
                                        ))}
                        </div>
                    }
                </PanchangCard>
        </>
    )

}