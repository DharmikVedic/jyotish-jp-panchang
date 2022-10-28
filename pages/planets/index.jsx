import React, {useCallback, useEffect, useState} from "react";
import {FetchApi, FetchAPI} from "../../components/utils/fetchapi";
import CommonChart from "../../components/planets/charts";
import PlanetTable from "../../components/planets/planetTable";

const planetData = [
    {
        "id": 0,
        "name": "太陽",
        "fullDegree": 261.46006345451764,
        "normDegree": 21.460063454517638,
        "speed": 1.0194905540259802,
        "isRetro": "false",
        "sign": "いて座",
        "signLord": "木星",
        "nakshatra": "プールヴァ・アーシャーダー",
        "nakshatraLord": "金星",
        "nakshatra_pad": 3,
        "house": 1,
        "is_planet_set": false,
        "planet_awastha": "ヴリッダ"
    },
    {
        "id": 1,
        "name": "月",
        "fullDegree": 305.58933927622957,
        "normDegree": 5.589339276229566,
        "speed": 14.0918720832174,
        "isRetro": "false",
        "sign": "みずがめ座",
        "signLord": "土星",
        "nakshatra": "ダニシュター",
        "nakshatraLord": "火星",
        "nakshatra_pad": 4,
        "house": 3,
        "is_planet_set": false,
        "planet_awastha": "バーラ"
    },
    {
        "id": 2,
        "name": "火星",
        "fullDegree": 232.49615786747998,
        "normDegree": 22.49615786747998,
        "speed": 0.7138961022910849,
        "isRetro": "false",
        "sign": "さそり座",
        "signLord": "火星",
        "nakshatra": "ジェーシュター",
        "nakshatraLord": "水星",
        "nakshatra_pad": 2,
        "house": 12,
        "is_planet_set": false,
        "planet_awastha": "クマーラ"
    },
    {
        "id": 3,
        "name": "水星",
        "fullDegree": 280.55278843317325,
        "normDegree": 10.552788433173248,
        "speed": 1.1556035018859816,
        "isRetro": "false",
        "sign": "やぎ座",
        "signLord": "土星",
        "nakshatra": "シュラヴァナ",
        "nakshatraLord": "月",
        "nakshatra_pad": 1,
        "house": 2,
        "is_planet_set": false,
        "planet_awastha": "ヴリッダ"
    },
    {
        "id": 4,
        "name": "木星",
        "fullDegree": 307.37990404911653,
        "normDegree": 7.379904049116533,
        "speed": 0.2027904044957305,
        "isRetro": "false",
        "sign": "みずがめ座",
        "signLord": "土星",
        "nakshatra": "シャタビシャ",
        "nakshatraLord": "ラーフ",
        "nakshatra_pad": 1,
        "house": 3,
        "is_planet_set": false,
        "planet_awastha": "クマーラ"
    },
    {
        "id": 5,
        "name": "金星",
        "fullDegree": 266.40231283686114,
        "normDegree": 26.402312836861142,
        "speed": -0.5939967558119493,
        "isRetro": "true",
        "sign": "いて座",
        "signLord": "木星",
        "nakshatra": "プールヴァ・アーシャーダー",
        "nakshatraLord": "金星",
        "nakshatra_pad": 4,
        "house": 1,
        "is_planet_set": true,
        "planet_awastha": "ムリタ"
    },
    {
        "id": 6,
        "name": "土星",
        "fullDegree": 288.29034662815104,
        "normDegree": 18.290346628151042,
        "speed": 0.11126993943230341,
        "isRetro": "false",
        "sign": "やぎ座",
        "signLord": "土星",
        "nakshatra": "シュラヴァナ",
        "nakshatraLord": "月",
        "nakshatra_pad": 3,
        "house": 2,
        "is_planet_set": false,
        "planet_awastha": "クマーラ"
    },
    {
        "id": 7,
        "name": "ラーフ",
        "fullDegree": 35.105571665923165,
        "normDegree": 5.105571665923165,
        "speed": -0.052991983270611685,
        "isRetro": "true",
        "sign": "おうし座",
        "signLord": "金星",
        "nakshatra": "クリッティカー",
        "nakshatraLord": "太陽",
        "nakshatra_pad": 3,
        "house": 6,
        "is_planet_set": false,
        "planet_awastha": "ムリタ"
    },
    {
        "id": 8,
        "name": "ケートゥ",
        "fullDegree": 215.10557166592315,
        "normDegree": 5.105571665923151,
        "speed": -0.052991983270611685,
        "isRetro": "true",
        "sign": "さそり座",
        "signLord": "火星",
        "nakshatra": "アヌラーダー",
        "nakshatraLord": "土星",
        "nakshatra_pad": 1,
        "house": 12,
        "is_planet_set": false,
        "planet_awastha": "ムリタ"
    },
    {
        "id": 9,
        "name": "アセンダント",
        "fullDegree": 240.82992670825183,
        "normDegree": 0.8299267082518327,
        "speed": 0,
        "isRetro": false,
        "sign": "いて座",
        "signLord": "木星",
        "nakshatra": "ムーラ",
        "nakshatraLord": "ケートゥ",
        "nakshatra_pad": 1,
        "house": 1,
        "is_planet_set": false,
        "planet_awastha": "--"
    }
]



export default function PLanets(){
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
    const [loader,setloader] = useState(false);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState({festivals:"",planets:planetData});
    const [year,setyear] = useState(dateobj.getFullYear());

    useEffect(()=>{
        let mouted = true;
        if(mouted){
            //Apicall(input);
        }
        return()=> {mouted = false};
    },[]);


    const Apicall =async(input)=>{
        setloader(true);
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
        setinput(prev => ({...prev, ...res }));
        setyear(datestring)
        const tzoneval = await Timezone(res);
        //Apicall({...input,...res,...tzoneval});
    },[]);


    return(
       <div className="w-full bg-zinc-100 min-h-screen pt-10 pb-20">
           <div className="max-w-[800px]  mx-auto w-full px-5 md:flex-row flex-col flex md:gap-14 gap-5 justify-between items-center">
           <CommonChart style="items-center md:items-start" userdata={input} chartId="D1"/>
           <CommonChart style="items-center md:items-end" userdata={input} chartId="D7"/>
           </div>
           <div className="mt-10 overflow-x-scroll max-w-[1200px] mx-auto px-5">
               <PlanetTable data={data.planets}/>
           </div>
       </div>
    )
}