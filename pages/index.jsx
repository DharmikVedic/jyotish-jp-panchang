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


export default function Home() {
    const {day,month,year,initialValue} = currentDateObj();
    const [loader,setloader]=useState(false);
    const [data,setData] = useState("");

    useEffect(()=>{
let mouted = true;
if(mouted){
    APICall(initialValue);
}
return()=>{mouted=false}
    },[]);

    const APICall =async(initialval)=>{
        setloader(true);
        let d ={};
        let apiname = ["advanced_panchang","planets","horo_chart/D1"];
        const multiple_api_call = await Promise.all(apiname.map(async (name,i) => {
            return await FetchAPI(name, initialval)
        }));
        for (let i = 0; i < multiple_api_call.length; i++) {
            // if(multiple_api_call[i].status){
                d[apiname[i]] = multiple_api_call[i]
            // }
        }
        setData(d);
        setloader(false)
    }


    //
    const getdata = useCallback(async (datestring, res)=>{
         await APICall({...initialValue,...res});
    },[]);


  return (
      <>
          <Formdata getinput={getdata}/>
              <div className="bg-zinc-100 min-h-screen pt-10 pb-20">
                  <div className='grid max-w-7xl mx-auto px-5 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10'>
                      <PanchangCard link="/panchang" style="bg-orange-500/70" title="Panchang for Today">
                          {loader || data == "" ?
                              <Loader/> :
                               <HomePanchang data={data['advanced_panchang']} day={day} month={month} year={year}/>
                          }
                      </PanchangCard>
                      <DailyCharts horo={data['horo_chart/D1']} planets={data['planets']}/>
                      <Festival/>
                      {/* planetary events */}
                      <PlanetaryPosition/>
                      <PanchangCard link="/muhurat" style="bg-yellow-600/80" title="Hindu Panchang">
                          <div className="pb-5 flex flex-col divide-zinc-300 divide-y">
                              <Link href="/panchang/abhijit-muhurat">
                                  <a className="flex  px-5 py-4 gap-5 justify-between hover:bg-zinc-200 items-center">
                                      <div className="flex gap-3 items-center">                                  <img src="/imgs/abhijit-muhrta.png" className="h-[30px]"/>
                                  <h6 className="font-semibold">
                                      Abhijit Muhurat
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
                                          Chogadiya Muhrta
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
                                          Hora Muhurat
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



