import {SunTable} from "../../components/table/suntable";
import React, {useCallback, useEffect, useState} from "react";
import {formatAMPM} from "../../components/json/country";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import Formdata from "../../components/table/tableFilter";
import {zodiac} from "../../components/panchang/planets";
import usePlace from "../../components/context/usePlace";


export default function Index(){
    const dateobj = new Date();
    const {place} = usePlace();

    const defaultobject = {
            day: dateobj.getDate(),
            hour: dateobj.getHours(),
            min: dateobj.getMinutes(),
            month: dateobj.getMonth()+1,
            year: dateobj.getFullYear(),
            ...place
    };
    const [loader,setloader] = useState(true);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState({panchang:"",tamil:""});

useEffect(()=>{
let mouted = true;
if(mouted && place){
    Apicall({...input,...place});
}
return()=> {mouted = false};
},[place]);


    const Apicall =async(input)=>{
        // setloader(true);
        const panchang = await FetchAPI("advanced_panchang",input);
        const tamil_panchang = await FetchAPI("tamil_panchang",input);
        setdata({panchang:panchang,tamil:tamil_panchang});
        setloader(false);
    }


    const getdata = useCallback(async (datestring, res)=>{
        setloader(true);
        setinput(prev => ({...prev, ...res }));
       await Apicall({...input,...res});
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
                    <SunTable thead="日の出 と 月の出">
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
                                {data.panchang.tithi.details.tithi_name} <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.tithi.end_time.hour}:${data.panchang.tithi.end_time.minute}`)}まで</span>
                            </td>
                            <td className="w-[30%] text-right">
                                <span>ナクシャトラ
</span>
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.nakshatra.details.nak_name} <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.nakshatra.end_time.hour}:${data.panchang.nakshatra.end_time.minute}`)}まで</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>ヨーガ
</span>
                            </td>
                            <td className="w-[30%] ">
                                {data.panchang.yog.details.yog_name} <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.yog.end_time.hour}:${data.panchang.yog.end_time.minute}`)}まで</span>
                            </td>
                            <td className="w-[20%] text-right">
                                <span>カラナ
</span>
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.karan.details.karan_name} <span
                                className='text-yellow-600'>{formatAMPM(`${data.panchang.karan.end_time.hour}:${data.panchang.karan.end_time.minute}`)}まで</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>曜日</span>
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
                    <SunTable thead="吉兆な時間帯">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>アビジタ・ムフールタ</span>
                            </td>
                            <td className="w-[20%] ">
                                <span
                                    className='text-yellow-600'>{formatAMPM(data.tamil.abhijit_muhurta.start)}</span> 〜{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.abhijit_muhurta.end)}</span>
                            </td>
                            <td className="w-[30%] text-right">
                                アムリタ・カーラ
                            </td>
                            <td className="w-[30%]">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.amrit_kaal[0].start)}</span> 〜{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.amrit_kaal[0].end)}</span>
                            </td>
                        </tr>
                        </tbody>
                    </SunTable>
                    <SunTable thead="凶の時間帯">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                ラーフ・カーラ
                            </td>
                            <td className="w-[20%] ">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.rahu_kaal.start)}</span> 〜{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.rahu_kaal.end)}</span>
                            </td>
                            <td className="w-[30%] text-right">
                                ヤマガンダ・カーラ
                            </td>
                            <td className="w-[30%]">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.yamghant_kaal.start)}</span> 〜{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.yamghant_kaal.end)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                グリカ・カーラ
                            </td>
                            <td className="w-[20%] ">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.gulik_kaal.start)}</span> 〜{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.gulik_kaal.end)}</span>
                            </td>
                            <td className="w-[30%] text-right">
                                ドゥル・ムフールタ
                            </td>
                            <td className="w-[30%]">
                                <span
                                    className='text-yellow-600'>{formatAMPM(data.tamil.dur_muhurtha[0].start_time)}</span> 〜{" "}
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.dur_muhurtha[0].end_time)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                ヴァルジャ
                            </td>
                            <td className="w-[20%] ">
                                <span className='text-yellow-600'>{formatAMPM(data.tamil.varjyam[0].start)}</span> 〜{" "}
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
                    <SunTable thead="アーナンダディ・ヨーガとタミル・ヨーガ">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>アーナンダディ・ヨーガ</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.tamil.anandadi_yog[0].yog_name} <span
                                className='text-yellow-600'>{formatAMPM(data.tamil.anandadi_yog[0].end_time)}まで</span>
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
                    <SunTable thead="ニヴァーサとシューラ">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                <span>ディシャー・シューラ</span>
                            </td>
                            <td className="w-[20%] ">
                                {data.panchang.disha_shool}
                            </td>
                            <td className="w-[30%] text-right">
                                ナクシャトラ・シューラ
                            </td>
                            <td className="w-[30%]">
                                {data.panchang.nak_shool.direction}
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[20%] text-right">
                                ムーン・ニヴァーサ
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
                    <SunTable thead="太陰月とサンヴァト">
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
                    <SunTable thead="ラーシとナクシャトラ">
                        <tbody>
                        <tr>
                            <td className="w-[20%] text-right">
                                月の星座
                            </td>
                            <td className="w-[20%] ">
                            <div className="flex gap-3 items-center">
                                    <span
                                        className={`text-[20px] font-zodiac text-violet-500`}>{zodiac[data.panchang.moon_sign]}</span>
                                    <span>{data.panchang.moon_sign}</span>
                                </div>
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
                    <SunTable thead="リトゥとアヤナ">
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