import {DateString, formatAMPM} from "../json/country";
import {Text} from "./dailyPanhang";
import React from "react";

export default function HomePanchang({data,day,month,year}){
    return(
        <div className="px-5 flex flex-col py-3">
            <h6 className="font-semibold text-base md:text-[20px] mb-2 text-green-600">
                {data?.day}, {DateString(day, month, year)}
            </h6>
            <Text text="日の出"
                  value={`<span class='text-yellow-600'>${formatAMPM(data.sunrise)}</span>`}/>
            <Text text="日の入り"
                  value={`<span class='text-yellow-600'>${formatAMPM(data.sunset)}</span>`}/>
            <Text text="ティティ"
                  value={`${data?.tithi.details.tithi_name} <span class='text-zinc-600'>upto</span> <span class='text-yellow-600'>${formatAMPM(`${data.tithi.end_time.hour}:${data.tithi.end_time.minute}`)}</span>`}/>
            <Text text="ナクシャトラ"
                  value={`${data?.nakshatra.details.nak_name} <span class='text-zinc-600'>upto</span> <span class='text-yellow-600'>${formatAMPM(`${data.nakshatra.end_time.hour}:${data.nakshatra.end_time.minute}`)}</span>`}/>
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
    )
}