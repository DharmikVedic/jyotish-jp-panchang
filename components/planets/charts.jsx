import React, {useCallback, useEffect, useState} from "react";
import Loader from "../utils/loader";
import {FetchAPI} from "../utils/fetchapi";
import {drawNorthChart} from "../chartui/chart";
import {getPlanetArray, getSignArray} from "../chartui/utils";



export default function CommonChart({userdata,chartId,style,handleCallback,id}){
   const [charttype,setcharttype] =  useState(chartId);
   const [loader,setloader] = useState(false);

    useEffect(()=> {
        let mouted = true;
        if(mouted && userdata){
            Apicall(userdata);
        }
       return()=> {mouted = false}
    },[handleCallback,userdata,charttype]);

       const Apicall =async(data)=> {
           try {
               if (data) {
                   const chart_style = {
                       lineColor: '#FFCA28',
                       planetColor: '#FF5722',
                       ascendantColor: 'blue',
                       signColor:"#ea580c",
                       chartType:"north",
                   }

                   const chart = await FetchAPI(`horo_chart/${charttype}`,{...data,...chart_style});
                   setTimeout(()=>drawNorthChart(getPlanetArray(chart), getSignArray(chart), chart_style,`#${id}`),200);
               }
           } catch (err) {
               throw console.error(err);
           }
       }


    const ChartOnclick = useCallback(async (e)=>{
        setcharttype(e.target.value);
        setloader(true);
        try {
            const chart_style = {
                lineColor: '#FFCA28',
                planetColor: '#FF5722',
                ascendantColor: 'blue',
                signColor:"#ea580c",
                chartType:"north"
            }
            const chart = await FetchAPI(`horo_chart/${charttype}`,{...userdata,...chart_style});
            setTimeout(()=>drawNorthChart(getPlanetArray(chart), getSignArray(chart), chart_style,`#${id}`),200);
            // setdata({svg: chart});
            setloader(false);
        } catch (err) {
            throw console.error(err);
        }
    },[]);



        return (
            <div className={`w-full justify-center  flex flex-col ${style}`}>
                <div className="w-full max-w-[350px]">
                    <select
                        onChange={ChartOnclick}
                        value={charttype}
                        className="bg-white mb-4 w-full border border-zinc-300 text-zinc-800 px-5 py-2 text-lg rounded  font-semibold "
                    >
                        <option value="D1">D1 バース・チャート</option>
                        <option value="SUN">太陽のチャート</option>
                        <option value="MOON">月のチャート</option>
                        <option value="chalit">チャリタ・チャート</option>
                        <option value="D2">D2 ホーラー・チャート</option>
                        <option value="D3">D3 ドレーッカナ・チャート</option>
                        <option value="D4">D4 チャトゥルターンシャ・チャート</option>
                        <option value="D5">D5 パンチャーンシャ・チャート</option>
                        <option value="D7">D7 サプタマーンシャ・チャート</option>
                        <option value="D8">D8 アシュタマーンシャ・チャート</option>
                        <option value="D9">D9 ナヴァマーンシャ・チャート</option>
                        <option value="D10">D10 ダシャマーンシャ・チャート</option>
                        <option value="D12">D12 ドヴァーダシャーンサ・チャート</option>
                        <option value="D16">D16 ショーダシャーンシャ・チャート</option>
                        <option value="D20">D20 ヴィシャマーンシャ・チャート</option>
                        <option value="D24">D24 チャトゥルヴィムシャーンシャ・チャート</option>
                        <option value="D27">D27 バーンシャ・チャート</option>
                        <option value="D30">D30 トリシャーンシャ・チャート</option>
                        <option value="D40">D40 カヴェーダーンシャ・チャート</option>
                        <option value="D45">D45 アクシャヴェーダーンシャ・チャート</option>
                        <option value="D60">D60 シャシュタヤンシャ・チャート</option>
                    </select>
                    <div className=" w-full h-[350px] overflow-x-scroll">
                        {(!loader) ?
                            <>
                            {/*<SvgImage*/}
                            {/*    svg={typeof data?.svg === "object" ? data?.svg?.svg : data?.svg}/>*/}
                            <div className="w-[350px] bg-white h-[350px]" id={id}>
                            </div>
                            </>
                            :
                            <Loader/>
                        }

                    </div>
                </div>
            </div>
        );
}






export function SvgImage(props) {
    return (
        <div
            className="bg-white w-[350px]"
            dangerouslySetInnerHTML={{ __html: props.svg }}
        />
    );
}

