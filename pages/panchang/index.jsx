import {SunTable} from "../../components/table/suntable";
import React, {useCallback, useEffect, useState} from "react";
import {formatAMPM} from "../../components/json/country";
import {FetchAPI, FetchApi} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import Formdata from "../../components/table/tableFilter";
import {zodiac} from "../../components/panchang/planets";

export default function Index(){
    const dateobj = new Date();
    const defaultobject = {
            country: "japan",
            day: dateobj.getDate(),
            hour: dateobj.getHours(),
        lat: 35.6761919,
        lon: 139.6503106,
            min: dateobj.getMinutes(),
            month: dateobj.getMonth()+1,
            tzone: 9,
            year: dateobj.getFullYear(),
    };
    const [loader,setloader] = useState(true);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState({panchang:"",tamil:""});

useEffect(()=>{
let mouted = true;
if(mouted){
    Apicall(input);
}
return()=> {mouted = false};
},[]);


    const Apicall =async(input)=>{
        // setloader(true);
        const panchang = await FetchAPI("advanced_panchang",input);
        const tamil_panchang = await FetchAPI("tamil_panchang",input);
        setdata({panchang:panchang,tamil:tamil_panchang});
        setloader(false);
    }

    const Timezone = async  (input) =>{
        const date = input.month+"-"+input.day+"-"+input.year;
        if(input.country !== "japan"){
            const timezone = await FetchApi({apiName: "timezone_with_dst",userData:{latitude: parseFloat(input.lat),longitude:parseFloat(input.lon),date:date}});
            setinput(prev=> ({...prev,tzone: timezone.response.timezone }));
            return {tzone: timezone.response.timezone };
        }
    }


    const getdata = useCallback(async (datestring, res)=>{
        setloader(true);
        setinput(prev => ({...prev, ...res }));
       const tzoneval = await Timezone(res);
       await Apicall({...input,...res,...tzoneval});
    },[]);


return(
        <>
            <Formdata getinput={getdata}/>
            {loader ?
                <div className="mt-[100px]">
                <Loader/>
                </div>
                :
                <div className="bg-zinc-100 pb-[100px] pt-[50px]">
                    <div className="  max-w-6xl mx-auto px-5 overflow-x-scroll">
                    <SunTable thead="日の出 and 月の出">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <div className="flex gap-2 items-center justify-end">
                                    <img className="w-6" src="/icons/sunrise.svg" alt="sunrise"/>
                                    <span>日の出</span>
                                </div>

                            </td>
                            <td className="w-[20%] ">
                                {formatAMPM(data.panchang.sunrise)}
                            </td>
                            <td className="w-[30%]">
                                <div className="flex gap-2 items-center justify-end">
                                    <img className="w-6" src="/icons/sunset.svg" alt="sunrise"/>
                                    <span>日の入り</span>
                                </div>
                            </td>
                            <td className="w-[30%]">
                                {formatAMPM(data.panchang.sunset)}
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                <div className="flex gap-2 items-center justify-end">
                                    <img className="w-6" src="/icons/moonrise.svg" alt="sunrise"/>
                                    <span>月の出</span>
                                </div>

                            </td>
                            <td className="w-[30%] ">
                                {formatAMPM(data.panchang.moonrise)}
                            </td>
                            <td className="w-[20%]">
                                <div className="flex gap-2 items-center justify-end">
                                    <img className="w-6" src="/icons/moonset.svg" alt="sunrise"/>
                                    <span>月の入り</span>
                                </div>
                            </td>
                            <td className="w-[30%]">
                                {formatAMPM(data.panchang.moonset)}
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="パンチャーンガ">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>ティティ</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.tithi.details.tithi_name} upto <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.tithi.end_time.hour}:${data.panchang.tithi.end_time.minute}`)}</span>
                            </td>
                            <td className="w-[30%] text-right">
                                <span>ナクシャトラ
</span>
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.nakshatra.details.nak_name} upto <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.nakshatra.end_time.hour}:${data.panchang.nakshatra.end_time.minute}`)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>ヨーガ
</span>
                            </td>
                            <td className="w-[30%] ">
                                {data.panchang.yog.details.yog_name} upto <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.yog.end_time.hour}:${data.panchang.yog.end_time.minute}`)}</span>
                            </td>
                            <td className="w-[20%] text-right">
                                <span>カラナ
</span>
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.karan.details.karan_name} upto <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.karan.end_time.hour}:${data.panchang.karan.end_time.minute}`)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>Weekday</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.day}
                            </td>
                            <td className="w-[30%]">
                                <span></span>
                            </td>
                            <td className="w-[30%]">
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>パクシャ</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.paksha}
                            </td>
                            <td className="w-[30%]">
                                <span></span>
                            </td>
                            <td className="w-[30%]">
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="Auspicious Timings">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>アビジタ・ムフールタ</span>
                            </td>
                            <td className="w-[20%] ">
                                <span
                                    className='text-yellow-600'>{formatAMPM(data.tamil.abhijit_muhurta.start)}</span> to{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.abhijit_muhurta.end)}</span>
                            </td>
                            <td className="w-[30%] text-right">
                                Amrit Kalam
                            </td>
                            <td className="w-[30%]">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.amrit_kaal[0].start)}</span> to{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.amrit_kaal[0].end)}</span>
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="Inauspicious Timings">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">ラーフ・カーラ
                            </td>
                            <td className="w-[20%] ">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.rahu_kaal.start)}</span> to{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.rahu_kaal.end)}</span>
                            </td>
                            <td className="w-[30%] text-right">
                                ヤマガンダ・カーラ
                            </td>
                            <td className="w-[30%]">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.yamghant_kaal.start)}</span> to{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.yamghant_kaal.end)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">グリカ・カーラ
                            </td>
                            <td className="w-[20%] ">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.gulik_kaal.start)}</span> to{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.gulik_kaal.end)}</span>
                            </td>
                            <td className="w-[30%] text-right">
                                Dur Muhurtam
                            </td>
                            <td className="w-[30%]">
                                <span
                                    className='text-yellow-600'>{formatAMPM(data.tamil.dur_muhurtha[0].start_time)}</span> to{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.dur_muhurtha[0].end_time)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">Varjyam
                            </td>
                            <td className="w-[20%] ">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.varjyam[0].start)}</span> to{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.varjyam[0].end)}</span>
                            </td>
                            <td className="w-[30%]">

                            </td>
                            <td className="w-[30%]">
                                {data.tamil.dur_muhurtha.length > 1 &&
                                <>
                                    <span
                                        className='text-yellow-600'>{data.tamil.dur_muhurtha[1].start_time !== "NaN:NaN:NaN" ? formatAMPM(data.tamil.dur_muhurtha[1].start_time) : ""}</span> to{" "}
                                    <span
                                        className='text-yellow-600'>{data.tamil.dur_muhurtha[1].end_time !== "NaN:NaN:NaN" ? formatAMPM(data.tamil.dur_muhurtha[1].end_time) : ""}</span>
                                </>
                                }
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="Anandadi and tamil Yoga">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>Anandadi Yoga</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.tamil.anandadi_yog[0].yog_name} upto <span
                                className='text-yellow-600'>{formatAMPM(data.tamil.anandadi_yog[0].end_time)}</span>
                            </td>
                            <td className="w-[30%]">
                            </td>
                            <td className="w-[30%]">
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                            </td>
                            <td className="w-[30%] ">
                                {data.tamil.anandadi_yog[1].yog_name}
                            </td>
                            <td className="w-[20%]">
                            </td>
                            <td className="w-[30%]">
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="Nivas and Shool">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>Disha Shool</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.disha_shool}
                            </td>
                            <td className="w-[30%] text-right">
                                Nakshatra Shool
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.nak_shool.direction}
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                Moon Nivash
                            </td>
                            <td className="w-[30%] ">
                                {data.panchang.moon_nivas}
                            </td>
                            <td className="w-[20%]">
                            </td>
                            <td className="w-[30%]">
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="Lunar Month and Samvat">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>シャカ・サンヴァト</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.shaka_samvat} {data.panchang.shaka_samvat_name}
                            </td>
                            <td className="w-[30%] text-right">
                                ヴィクラマ・サンヴァト
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.vikram_samvat} {data.panchang.vkram_samvat_name}
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="Rashi and Nakshatra">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>
                                    月の星座

</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.moon_sign}
                            </td>
                            <td className="w-[30%] text-right">
                                太陽の星座
                            </td>
                            <td className="w-[30%]">
                                <div className="flex gap-3 items-center">
                                    <span
                                        className={`text-[20px] font-zodiac text-violet-500`}>{zodiac[data.panchang.sun_sign]}</span>
                                    <span>{data.panchang.sun_sign}</span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="Ritu and Ayana">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>アヤナ</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.ayana}
                            </td>
                            <td className="w-[30%] text-right">
                                リトゥ
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.ritu}
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                </div>
                </div>
            }
            </>
    )
}