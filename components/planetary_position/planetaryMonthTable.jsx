import React from "react";
import {TrEntry} from "./planetaryTable";

export default function PlanetaryMonthTable(){
    return(
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>
                    November 2022 Planetary Events
                </th>
                </tr>
                </thead>
                <tbody>
                {[...Array(10)].map((item,i)=>(
                    <tr key={i} className={"grid grid-cols-1 w-full md:grid-cols-2 "}>
                    <TrEntry/>
                    <TrEntry/>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}