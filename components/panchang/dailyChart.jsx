import React, {useCallback, useState} from "react";
import {currentDateObj} from "../utils/currentDateObject";
import ChartButton from "../chartui/chartsButton";
import CommonLoadrFunction from "../utils/commonFetch";
import {FetchAPI} from "../utils/fetchapi";
import PanchangCard from "./dailyPanhang";
import Loader from "../utils/loader";
import Planets from "./planets";

export default function DailyCharts(){
    const [loader,setloader] = useState(false);
    const [data,setData] = useState(null);
    const [chartType,setChartType] = useState('north');
     const {initialValue} = currentDateObj();
    //
    const customChart = {
        planetColor:"#333",
        signColor:"#ea580c",
        lineColor:"#333",
        chartType:chartType
    }

    const handleChart=(val)=>{
        setChartType(val);
        chart(val)
         }

    const chart = useCallback((charttype)=>{
        APICall(charttype)
    },[chartType])


    const APICall =async(charttype)=>{
        setloader(true);
        try {
            const customChart = {
                planetColor:"#333",
                signColor:"#ea580c",
                lineColor:"#333",
                chartType:charttype
            }
            const Charts= await FetchAPI("horo_chart_image/D1", {...initialValue,...customChart});
            setData(prev=> ({...prev,['horo_chart_image/D1']:Charts}));
            setloader(false);
        }
        catch (e) {
            return e.message
        }
    }

    const  handleData =(value)=>{
        if(value.status){
            setData(value.data);
        }
        else{
            alert(value.msg);
        }
    }

    return(
        <PanchangCard link="/muhurat" style="bg-sky-500/80" title="Lagna Kundali">
                <div className="pt-2 pb-5 px-5 flex flex-col ">
                    <ChartButton activeChart={chartType} passChart={handleChart}/>
                    <CommonLoadrFunction passdata={handleData} apinames={['planets','horo_chart_image/D1']}
                                         reqBody={{...initialValue, ...customChart}}>


                        {data ?
                            <div className="flex flex-col gap-5">
                            {/* chart */}
                            <div className="h-[320px] w-full">
                                {loader ? <Loader/> :
                                    <div
                                        className="text-4xl tracking-wider  "
                                        dangerouslySetInnerHTML={{__html: data['horo_chart_image/D1'].svg}}
                                    />
                                }
                            </div>
                                {/* planets */}
                                <div>
                                    <Planets data={data?.planets.slice(0,5)}/>
                                </div>
                            </div>
                            :" "
                        }

                    </CommonLoadrFunction>
                </div>
        </PanchangCard>
    )
}