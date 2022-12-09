import React, {useCallback, useEffect, useState} from "react";
import {currentDateObj} from "../utils/currentDateObject";
import ChartButton from "../chartui/chartsButton";
import {FetchAPI} from "../utils/fetchapi";
import PanchangCard from "./dailyPanhang";
import {drawNorthChart} from "../chartui/chart";
import {getPlanetArray, getSignArray, getSignPlanetArray} from "../chartui/utils";
import {drawSouthChart} from "../chartui/southChart";
import Loader from "../utils/loader";
import Planets from "./planets";

export default function DailyCharts({horo,planets,reqData}){
    const [loader,setloader] = useState(false);
    const [data,setData] = useState(null);
    const [eastchart,seteastchart] = useState(null);
    const [chartType,setChartType] = useState('north');
     const {initialValue} = currentDateObj();

    var options = {
        lineColor: '#FFCA28',
        planetColor: '#FF5722',
        ascendantColor: 'blue',
        signColor:"#ea580c",
        width:320,
    };

    const handleChart=(val)=>{
        setChartType(val);
        chart(val)
         }

    const chart = useCallback(async (charttype)=>{
            setloader(true);
            if( data) {
                await APICall(charttype,data['horo_chart/D1'])
            }
    },[chartType,data])



    const APICall =async(charttype,horodata)=>{
        try {
            if(charttype =="east"){
                const Charts= await FetchAPI("horo_chart_image/D1", {...initialValue,...options,chartType:"east"});
                seteastchart(Charts);
            }
            else if(charttype =="south"){
                setTimeout(()=>drawSouthChart(getSignPlanetArray(horodata),horodata[0]['sign'], options,'#northChart'),500);
            }
            else{
                setTimeout(()=>drawNorthChart(getPlanetArray(horodata), getSignArray(horodata), options,'#northChart'),500);
            }
            setloader(false);
        }
        catch (e) {
            return e.message
        }
    }


    const eastCartApi = async(req)=>{
        const Charts= await FetchAPI("horo_chart_image/D1", {...req,...options,chartType:"east"});
        seteastchart(Charts);
    }


    useEffect(()=>{
        if(horo && chartType !== "east") {
            setData({'horo_chart/D1': horo, planets: planets})
            setTimeout(() => drawNorthChart(getPlanetArray(horo), getSignArray(horo), options, "#northChart"), 500);
        }
        else if(horo && chartType === "east"){
            eastCartApi(reqData);
        }
       },[horo]);

console.log(horo,initialValue);
    return(
        <PanchangCard link="/planets" style="bg-sky-500/80" title="ラグナ・クンダリー">
            {data ?
                <div className="pt-2 pb-5 px-5 flex flex-col ">
                    <ChartButton activeChart={chartType} passChart={handleChart}/>
                    {/*<CommonLoadrFunction passdata={handleData} apinames={['planets','horo_chart/D1']}*/}
                    {/*                     reqBody={{...initialValue, ...options}}>*/}

                    {data ?
                        <div className="flex flex-col gap-5">
                            {/* chart */}
                            <div className="mt-2 flex justify-center  w-full">
                                {loader ? <Loader/> :
                                    <>
                                        {chartType == "east" &&
                                        <div
                                            className="w-[350px] h-[350px]"
                                            dangerouslySetInnerHTML={{__html: eastchart.svg}}
                                        />
                                        }
                                        <div className="w-[320px] h-[320px]" id="northChart">
                                        </div>

                                    </>
                                }
                            </div>
                            {/* planets */}
                            <div>
                                <Planets data={data?.planets?.slice(0, 5)}/>
                            </div>
                        </div>
                        : " "
                    }
                    {/*</CommonLoadrFunction>*/}
                </div>
                :
                <Loader/>
            }
        </PanchangCard>
    )
}