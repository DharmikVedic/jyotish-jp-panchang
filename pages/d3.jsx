import React, {useEffect,  useState} from "react";
import {getSignPlanetArray} from "../components/chartui/utils";
import {drawSouthChart} from "../components/chartui/southChart";
import {FetchAPI} from "../components/utils/fetchapi";
import {currentDateObj} from "../components/utils/currentDateObject";

export default function D3(){
    const [data,setdata] = useState(null);
    const {initialValue} = currentDateObj();

    var options = {
        lineColor: '#FFCA28',
        planetColor: '#FF5722',
        ascendantColor: 'blue',
        signColor:"#ea580c",
        chartType:"north",
        width:500,
    };

    useEffect(()=>{
        ApiCall(initialValue);
    },[]);


    const ApiCall = async(data)=>{
        try {
            if (data) {
                const planet = await FetchAPI(`horo_chart/D1`,{...data});
                console.log(getSignPlanetArray(planet),planet[0]['sign'])
                drawSouthChart(getSignPlanetArray(planet), planet[0]['sign'], options,'#northChart');
                setdata({svg: planet});
            }
        } catch (err) {
            throw console.error(err);
        }
    }

    return(
        <>
            <div id="northChart">
                
            </div>
        </>
    )
}