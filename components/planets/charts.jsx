import React, {useCallback, useEffect, useState} from "react";
import Loader from "../utils/loader";
import {FetchAPI} from "../utils/fetchapi";

const chart = `<svg width="350" height="330" id="chartSvg" xmlns="http://www.w3.org/2000/svg"><g class="slice"></g><g class="slice"></g><g class="slice"><path d="M10,10L175,10L92.5,87.5L10,10" stroke="#333" stroke-width="1" fill="none"></path><path d="M175,10L340,10L257.5,87.5L175,10" stroke="#333" stroke-width="1" fill="none"></path><path d="M92.5,87.5L10,165L10,10" stroke="#333" stroke-width="1" fill="none"></path><path d="M92.5,87.5L175,165L257.5,87.5L175,10" stroke="#333" stroke-width="1" fill="none"></path><path d="M257.5,87.5L340,165L340,10" stroke="#333" stroke-width="1" fill="none"></path><path d="M92.5,87.5L175,165L92.5,242.5L10,165" stroke="#333" stroke-width="1" fill="none"></path><path d="M257.5,87.5L340,165L257.5,242.5L175,165" stroke="#333" stroke-width="1" fill="none"></path><path d="M92.5,242.5L10,320L10,165" stroke="#333" stroke-width="1" fill="none"></path><path d="M175,165L257.5,242.5L175,320L92.5,242.5" stroke="#333" stroke-width="1" fill="none"></path><path d="M92.5,242.5L175,320L10,320" stroke="#333" stroke-width="1" fill="none"></path><path d="M257.5,242.5L340,320L175,320" stroke="#333" stroke-width="1" fill="none"></path><text font-size="15.714285714285714px">11</text><text font-size="15.714285714285714px" x="171.7" y="152.6" style="fill: #ea580c;">10</text><text font-size="15.714285714285714px" x="92.5" y="72" style="fill: #ea580c;">11</text><text font-size="15.714285714285714px" x="67.75" y="93.7" style="fill: #ea580c;">12</text><text font-size="15.714285714285714px" x="158.5" y="169.65" style="fill: #ea580c;">1</text><text font-size="15.714285714285714px" x="69.4" y="250.25" style="fill: #ea580c;">2</text><text font-size="15.714285714285714px" x="82.6" y="261.1" style="fill: #ea580c;">3</text><text font-size="15.714285714285714px" x="168.4" y="183.6" style="fill: #ea580c;">4</text><text font-size="15.714285714285714px" x="249.25" y="261.1" style="fill: #ea580c;">5</text><text font-size="15.714285714285714px" x="274" y="242.5" style="fill: #ea580c;">6</text><text font-size="15.714285714285714px" x="186.55" y="169.65" style="fill: #ea580c;">7</text><text font-size="15.714285714285714px" x="274" y="92.15" style="fill: #ea580c;">8</text><text font-size="15.714285714285714px" x="249.25" y="72" style="fill: #ea580c;">9</text><text font-size="17.261221610855724px" x="153.49251892609618" y="87.5" style="fill: #333;">Mo </text><text font-size="17.261221610855724px" x="235.99251892609618" y="165" style="fill: #333;">Ke </text><text font-size="17.261221610855724px" x="122.24251892609618" y="254.00748107390382" style="fill: #333;">Ma </text><text font-size="17.261221610855724px" x="204.74251892609618" y="254.00748107390382" style="fill: #333;">Sa </text><text font-size="17.261221610855724px" x="70.99251892609618" y="165" style="fill: #333;">Ra </text><text font-size="17.261221610855724px" x="80.99251892609618" y="48.75" style="fill: #333;">Me </text><text font-size="17.261221610855724px" x="245.99251892609618" y="48.75" style="fill: #333;">Ju </text><text font-size="17.261221610855724px" x="28.235037852192363" y="99.00748107390382" style="fill: #333;">Su </text><text font-size="17.261221610855724px" x="28.235037852192363" y="254.00748107390382" style="fill: #333;">Ve </text></g><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#000000" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#000000" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#000000" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#000000" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#000000" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="darkorange" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="black" stroke-width="1" fill="none"></path><path d="M340,165L340,320L257.5,242.5" stroke="#333" stroke-width="1" fill="none"></path></svg>`;



export default function CommonChart({userdata,chartId,style}){
   const [data,setdata] = useState({svg:chart});
   const [charttype,setcharttype] =  useState(chartId);
   const [loader,setloader] = useState(false);

    useEffect(()=> {
        //Apicall(userdata);
    },[]);

       const Apicall =async(data)=> {
           try {
               if (data) {
                   const chart_style = {
                       lineColor: '#FFCA28',
                       planetColor: '#FF5722',
                       ascendantColor: 'blue',
                       signColor:"#ea580c",
                       chartType:"north"
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
                        className="bg-[#D8894E] mb-4 md:text-lg text-base w-full text-white font-semibold p-2 w-full  rounded-md "
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
                    <div className=" w-full overflow-x-scroll">
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
            className="bg-[#FFFBBE] w-[350px]"
            dangerouslySetInnerHTML={{ __html: props.svg }}
        />
    );
}

