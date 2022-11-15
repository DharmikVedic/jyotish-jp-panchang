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
                          <div className="p-5">
                              <div className="flex gap-3">
                                  <img src="/panchang.png" className="w-[80px] h-[80px]"/>
                                  <p>
                                      <Link href="/panchang">
                                          <a className="hover:text-red-500">
                                              Panchang
                                          </a></Link>

                                          , Bengali Panjika
                                      Tamil Panchangam
                                      Telugu Panchangam
                                      Malayalam Panchangam
                                  </p>
                              </div>
                          </div>
                      </PanchangCard>
                  </div>
              </div>
          }
          </>
  )
}



