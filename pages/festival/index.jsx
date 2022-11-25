import React, {useCallback, useEffect, useState} from "react";
import FestivalFormdata from "../../components/festival/festivalFilter";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FeativalYearCard from "../../components/festival/festivalCard";

export default function Festival({festival}){
    const dateobj = new Date();
    const defaultobject = {
        lat: 35.6761919,
        lon: 139.6503106,
        timezone: 9,
        year: dateobj.getFullYear(),
    };
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState(festival);
    const [year,setyear] = useState(defaultobject);

    // useEffect(()=>{
    //     let mouted = true;
    //     if(mouted) {
    //       //Apicall(year);
    //     }
    //     return()=> {mouted = false};
    // },[]);


    const Apicall =async(passyear)=>{
        setloader(true);
        const yearlyFestival = await FetchAPI("yearly_festivals",{year:passyear});
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
        setyear(res)
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


export async function getStaticProps(context) {
    const dateobj = new Date();
    const year = dateobj.getFullYear();
    const requestdata = {
        year:year,
        timezone:9
    }

    // Festival at build time
    const Apicall =async(year)=>{
        const yearlyFestival = await FetchAPI("yearly_festivals",requestdata);
        if(yearlyFestival.status) {
            let arr = [];
            const monthFilter = [...Array(12)].map((item, i) => {
                let obj = {};
                let filterArr = yearlyFestival.festivals.filter(val => val.month == i + 1);
                obj[i + 1] = filterArr
                arr.push(filterArr);
            });
            return arr;

        }
    }

    const getFestival = await Apicall(year);
    return {
        props: {
            festival:getFestival
        },
    }
}





export const weekDay =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const hindiWeekDay = ['रबिवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
export const  mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
