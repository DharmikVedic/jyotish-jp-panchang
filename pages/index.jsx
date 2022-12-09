import PanchangCard from "../components/panchang/dailyPanhang";
import {FetchAPI} from "../components/utils/fetchapi";
import React, {useCallback, useEffect, useState} from "react";
import {currentDateObj} from "../components/utils/currentDateObject";
import Festival from "../components/festivalApi";
import DailyCharts from "../components/panchang/dailyChart";
import Loader from "../components/utils/loader";
import Link from "next/link";
import PlanetaryPosition from "../components/planetary_position/planetaryTable";
import Formdata from "../components/table/tableFilter";
import HomePanchang from "../components/panchang/homePanchang";


export default function Home({events}) {
    const {day,month,year,initialValue} = currentDateObj();
    const [loader,setloader]=useState(false);
    const [currentDate,setCurrentDate] = useState({day:day,month:month,year:year});
    const [data,setData] = useState("");

    useEffect(()=>{
        APICall(initialValue);
    },[])

    // get 15 festivals
    const get15FestivalName = async(initial)=>{

        const initialdata = {
            date: initial.day,
            month: initial.month,
            year: initial.year,
        }

        const apiname = "upcoming_festivals";
        const festivals = await FetchAPI(apiname,initialdata);
        return festivals;
    }



    const APICall =async(initialval)=>{
        setloader(true);
        let d ={};
        let apiname = ["advanced_panchang","planets","horo_chart/D1"];
        const multiple_api_call = await Promise.all(apiname.map(async (name,i) => {
            return await FetchAPI(name, initialval)
        }));
        const festivals =await get15FestivalName(initialval);
        d['festival'] = festivals;
        for (let i = 0; i < multiple_api_call.length; i++) {
                d[apiname[i]] = multiple_api_call[i]
        }
        setData(d);
        setloader(false)
    }


    const getdata = useCallback(async (datestring, res,state)=>{
        setCurrentDate({day:res.day,month:res.month,year:res.year})
         await APICall({...initialValue,...res});
    },[]);



    return (
      <>
          <Formdata getinput={getdata}/>
              <div className="bg-zinc-100 min-h-screen pt-10 pb-20">
                  <div className='grid max-w-7xl mx-auto px-5 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10'>
                      <PanchangCard link="/panchang" style="bg-orange-500/70" title="今日のパンチャーンガ">
                          {loader || data == "" ?
                              <Loader/> :
                               <HomePanchang data={data['advanced_panchang']} day={currentDate.day} month={currentDate.month} year={currentDate.year}/>
                          }
                      </PanchangCard>
                      <DailyCharts horo={data['horo_chart/D1']} planets={data['planets']}/>
                      <Festival data={data['festival']}/>
                      {/* planetary events */}
                      <PlanetaryPosition events={events}/>
                      <PanchangCard link="/muhurat" style="bg-yellow-600/80" title="Hindu Panchang">
                          <div className="pb-5 flex flex-col divide-zinc-300 divide-y">
                              <Link href="/panchang/abhijit-muhurat">
                                  <a className="flex  px-5 py-4 gap-5 justify-between hover:bg-zinc-200 items-center">
                                      <div className="flex gap-3 items-center">                                  <img src="/imgs/abhijit-muhrta.png" className="h-[30px]"/>
                                  <h6 className="font-semibold">
                                      アビジタ・ムフールタ
                                  </h6>
                                      </div>
                                  <button>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                      </svg>
                                  </button>
                              </a>
                              </Link>
                              <Link href="/panchang/chaughadiya">
                                  <a className="flex px-5 py-4 gap-5 justify-between hover:bg-zinc-200 items-center">
                                      <div className="flex gap-3 items-center">
                                          <img src="/imgs/chogadiya-muhrta.png" className="h-[30px]"/>
                                      <h6 className="font-semibold">
                                          チャウガディヤー・ムフールタ
                                      </h6>
                                      </div>
                                      <button>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                          </svg>
                                      </button>
                                  </a>
                              </Link>
                              <Link href="/panchang/hora">
                                  <a className="flex px-5 py-4 gap-5 justify-between hover:bg-zinc-200 items-center">
                                      <div className="flex gap-3 items-center">
                                      <img src="/imgs/hora.png" className="h-[30px]"/>
                                      <h6 className="font-semibold">
                                          ホーラー・ムフールタ
                                      </h6>
                                      </div>
                                      <button>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                          </svg>
                                      </button>
                                  </a>
                              </Link>
                          </div>
                      </PanchangCard>
                  </div>
              </div>
          </>
  )
}


export async function getStaticProps(context) {

    const dateobj = new Date();
    const defaultobject = {
        country: "japan",
        date: dateobj.getDate(),
        hour: dateobj.getHours(),
        lat: 35.6761919,
        lon: 139.6503106,
        min: dateobj.getMinutes(),
        month: dateobj.getMonth()+1,
        timezone: 9,
        year: dateobj.getFullYear(),
    };

    // // today panchang and planets data
    // const APICall =async(initialval)=>{
    //     try {
    //         let d = {};
    //         let apiname = ["advanced_panchang", "planets", "horo_chart/D1"];
    //         const multiple_api_call = await Promise.all(apiname.map(async (name, i) => {
    //             return await FetchAPI(name, initialval)
    //         }));
    //         for (let i = 0; i < multiple_api_call.length; i++) {
    //             d[apiname[i]] = multiple_api_call[i]
    //         }
    //         return d;
    //     }
    //     catch(err){
    //         return {status:false,msg:err.message};
    //     }
    // }
    //



    // // 20 days festival call
    // const FestivalAPICall =async(val)=>{
    //     try {
    //         let festival = [];
    //         const initialData = getMultipleDate(val-1);
    //         const multiple_api_call = await Promise.all([...Array(val)].map(async (_,j) => {
    //             return await FetchAPI("panchang_festival", initialData[j])
    //         }));
    //         for (let i = 0; i < multiple_api_call.length; i++) {
    //             if(multiple_api_call[i].status){
    //                 festival.push({festivals:multiple_api_call[i]?.festivals,date:initialData[i]});
    //             }
    //         }
    //         return festival;
    //     }
    //     catch(err){
    //         return {status:false,msg:err.message};
    //     }
    // }


    // planetary events api call
    const PlnetaryEventsApicall =async(input)=>{
        const events = await FetchAPI("vedic_planetary_events",input);
       return events;
    }



    // const data = await APICall(initialValue);
    const getPlanetaryEvents = await PlnetaryEventsApicall(defaultobject);
    return {
        props: {
            // festival:getfestival,
            events:getPlanetaryEvents
        },
    }
}




