import React from "react";

export default function PlanetaryEventsYearlyCard({data,index,sign}){

    return(
        <div className="bg-white flex z-[2] overflow-hidden relative py-3 pr-5 pl-10 rounded">
            <div className="absolute z-[1] text-white font-semibold pt-4 pl-4 top-[-20px] left-[-20px] bg-yellow-600 h-[55px] flex justify-center items-center rounded-full w-[55px]">
                {index +1}
            </div>
            {/*<p className="text-center font-semibold relative z-[2] text-white flex justify-center items-center w-[30px] mr-5">*/}
            {/*    {index +1}*/}
            {/*</p>*/}

            <div className="w-full">
                <p>
            <span className="text-yellow-700 text-lg">
                {sign ?data?.sign_name :  data?.nakshatra_name}
            </span>
                </p>
                <p className="text-zinc-600 text-sm">
                    {data?.transit_date}
                </p>
            </div>
        </div>
    )
}