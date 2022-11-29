import React, {useCallback, useEffect, useState} from "react";
import Loader from "../utils/loader";
import {FetchAPI} from "../utils/fetchapi";



export default function CommonChart({userdata,chartId,style,handleCallback}){
   const [data,setdata] = useState({svg:null});
   const [charttype,setcharttype] =  useState(chartId);
   const [loader,setloader] = useState(false);

    useEffect(()=> {
        let mouted = true;
        if(mouted && userdata){
            Apicall(userdata);
        }
       return()=> {mouted = false}
    },[handleCallback,userdata]);

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

                   const planet = await FetchAPI(`horo_chart_image/${charttype}`,{...data,...chart_style});
                   setdata({svg: planet});
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
            const chart = await FetchAPI(`horo_chart_image/${charttype}`,{...userdata,...chart_style});
            setdata({svg: chart});
            setloader(false);
        } catch (err) {
            throw console.error(err);
        }
    },[]);

        return (
            <div className={`w-full  justify-center  flex flex-col ${style}`}>
                <div className="w-full max-w-[350px]">
                    <select
                        onChange={ChartOnclick}
                        value={charttype}
                        className="bg-white mb-4 w-full border border-zinc-300 text-zinc-800 px-5 py-2 text-lg rounded  font-semibold "
                    >
                        <option value="D1">Birth Chart</option>
                        <option value="SUN">Sun Chart</option>
                        <option value="MOON">Moon Chart</option>
                        <option value="chalit">Chalit Chart</option>
                        <option value="D2">Hora Chart</option>
                        <option value="D3">Dreshkan Chart</option>
                        <option value="D4">Chathurthamasha Chart</option>
                        <option value="D4">Panchmansha Chart</option>
                        <option value="D7">Saptamansha Chart</option>
                        <option value="D8">Ashtamansha Chart</option>
                        <option value="D9">Navamansha Chart</option>
                        <option value="D10">Dashamansha Chart</option>
                        <option value="D12">Dwadashamsha chart</option>
                        <option value="D16">Shodashamsha Chart</option>
                        <option value="D20">Vishamansha Chart</option>
                        <option value="D24">Chaturvimshamsha Chart</option>
                        <option value="D27">Bhamsha Chart</option>
                        <option value="D30">Trishamansha Chart</option>
                        <option value="D40">Khavedamsha Chart</option>
                        <option value="D45">Akshvedansha Chart</option>
                        <option value="D60">Shashtymsha Chart</option>
                    </select>
                    <div className=" w-full h-[350px] overflow-x-scroll">
                        {(data?.svg && !loader) ?
                            <SvgImage
                                svg={typeof data?.svg === "object" ? data?.svg?.svg : data?.svg}/>
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

