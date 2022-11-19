import React, {useCallback, useEffect, useState} from "react";
import FestivalFormdata from "../../components/festival/festivalFilter";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FeativalYearCard from "../../components/festival/festivalCard";

export default function Festival(){
    const dateobj = new Date();
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState([]);
    const [year,setyear] = useState(dateobj.getFullYear());

    useEffect(()=>{
        let mouted = true;
        if(mouted) {
          Apicall(year);
        }
        return()=> {mouted = false};
    },[]);


    const Apicall =async(year)=>{
        setloader(true);
        const yearlyFestival = await FetchAPI("yearly_festivals",{year:year});
        if(yearlyFestival.status) {
            let arr = [];
            const monthFilter = [...Array(12)].map((item, i) => {
                let obj = {};
                let filterArr = yearlyFestival.festivals.filter(val => val.month == i + 1);
                obj[i + 1] = filterArr
                arr.push(filterArr);
            });
            setdata(arr);
            setloader(false);
        }
        setloader(false);
    }



    const getdata = useCallback(async (datestring, res)=>{
        //setinput(prev => ({...prev, ...res }));
        setyear(res.year)
        await Apicall(res.year);
    },[]);



    return(
        <div>
        <FestivalFormdata getinput={getdata} />
            {loader || data.length <= 0 ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 pt-10 pb-20 min-h-screen">
                <div className="max-w-4xl flex flex-col gap-5 mx-auto px-5">
                    {data?.map((item,i)=>{
                        return(
                            <FeativalYearCard year={year} festival={item} monthName={mL[i]} key={i}/>
                        )
                    }
                    )}
                </div>
                </div>
            }
        </div>
    )
}

export const weekDay =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const hindiWeekDay = ['रबिवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
export const  mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
