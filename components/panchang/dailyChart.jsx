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

export default function DailyCharts({horo,planets}){
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
                await APICall(charttype)
            }
    },[chartType,data])


    const APICall =async(charttype)=>{
        try {
            if(charttype =="east"){
                const Charts= await FetchAPI("horo_chart_image/D1", {...initialValue,...options,chartType:"east"});
                seteastchart(Charts);
            }
            else if(charttype =="south"){
                console.log(data['horo_chart/D1'][0]['sign']);
                setTimeout(()=>drawSouthChart(getSignPlanetArray(data['horo_chart/D1']),data['horo_chart/D1'][0]['sign'], options,'#northChart'),500);
            }
            else{
                setTimeout(()=>drawNorthChart(getPlanetArray(data['horo_chart/D1']), getSignArray(data['horo_chart/D1']), options,'#northChart'),500);
            }
            setloader(false);
        }
        catch (e) {
            console.log(e.message)
            return e.message
        }
    }



    useEffect(()=>{
        if(horo) {
            setData({'horo_chart/D1': horo, planets: planets})
            setTimeout(() => drawNorthChart(getPlanetArray(horo), getSignArray(horo), options, "#northChart"), 500);
        }
       },[horo]);


    // const  handleData =(value)=>{
    //     if(value.status){
    //         setData(value.data);
    //         setTimeout(()=> drawNorthChart(getPlanetArray(value.data['horo_chart/D1']), getSignArray(value.data['horo_chart/D1']), options,"#northChart"),500);
    //     }
    //     else{
    //         alert(value.msg);
    //     }
    // }


    return(
        <PanchangCard link="/planets" style="bg-sky-500/80" title="Lagna Kundali">
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