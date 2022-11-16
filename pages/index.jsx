import PanchangCard, {Text} from "../components/panchang/dailyPanhang";
import {FetchAPI} from "../components/utils/fetchapi";
import React, {useEffect, useState} from "react";
import {DateString, formatAMPM} from "../components/json/country";
import {currentDateObj} from "../components/utils/currentDateObject";
import Festival from "../components/festivalApi";
import DailyCharts from "../components/panchang/dailyChart";
import Loader from "../components/utils/loader";
import Link from "next/link";
import PlanetaryPosition from "../components/planetary_position/planetaryTable";


export default function Home() {
    const {day,month,year,initialValue} = currentDateObj();
    const [loader,setloader]=useState(false);
    const [data,setData] = useState("");

    useEffect(()=>{
let mouted = true;
if(mouted){
    APICall();
}
return()=>{mouted=false}
    },[]);


    const APICall =async()=>{
        setloader(true);
        const res = await FetchAPI("advanced_panchang",initialValue);
        setData(res);
        setloader(false)
    }

    // const value= use(FetchAPI());
  return (
      <>
          {loader || data == "" ?
              <Loader/> :
              <div className="bg-zinc-100 min-h-screen pt-10 pb-20">
                  <div className='grid max-w-7xl mx-auto px-5 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10'>
                      <PanchangCard link="/panchang" style="bg-orange-500/70" title="Panchang for Today">
                          <div className="px-5 flex flex-col py-3">
                              <h6 className="font-semibold text-base md:text-[20px] mb-2 text-green-600">
                                  {data.day}, {DateString(day, month, year)}
                              </h6>
                              <Text text="日の出"
                                    value={`<span class='text-yellow-600'>${formatAMPM(data.sunrise)}</span>`}/>
                              <Text text="日の入り"
                                    value={`<span class='text-yellow-600'>${formatAMPM(data.sunset)}</span>`}/>
                              <Text text="ティティ"
                                    value={`${data.tithi.details.tithi_name} <span class='text-zinc-600'>upto</span> <span class='text-yellow-600'>${formatAMPM(`${data.tithi.end_time.hour}:${data.tithi.end_time.minute}`)}</span>`}/>
                              <Text text="ナクシャトラ"
                                    value={`${data.nakshatra.details.nak_name} <span class='text-zinc-600'>upto</span> <span class='text-yellow-600'>${formatAMPM(`${data.nakshatra.end_time.hour}:${data.nakshatra.end_time.minute}`)}</span>`}/>
                              <Text text="ヨーガ"
                                    value={`${data.yog.details.yog_name} <span class='text-zinc-600'>upto</span> <span class='text-yellow-600'>${formatAMPM(`${data.yog.end_time.hour}:${data.yog.end_time.minute}`)}</span>`}/>
                              <Text text="カラナ"
                                    value={`${data.karan.details.karan_name} <span class='text-zinc-600'>upto</span> <span class='text-yellow-600'>${formatAMPM(`${data.karan.end_time.hour}:${data.karan.end_time.minute}`)}</span>`}/>
                              {/*<Text text="Karana" value=""/>*/}
                              <Text text="パクシャ" value={data.paksha}/>
                              <Text text="Weekday" value={data.day}/>
                              <Text text="アマーンタ" value={data.hindu_maah.amanta}/>
                              <Text text="プールニマーンタ" value={data.hindu_maah.purnimanta}/>
                              <Text text="Moonsign" value={data.moon_sign}/>
                              <Text text="Sunsign" value={data.sun_sign}/>
                              <Text text="シャカ・サンヴァト" value={data.shaka_samvat_name}/>
                              <Text text="ヴィクラマ・サンヴァト" value={data.vkram_samvat_name}/>
                              {/*<Text text="Gujarati Samavat" value=""/>*/}
                          </div>
                      </PanchangCard>
                      <DailyCharts />
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
          }
          </>
  )
}



