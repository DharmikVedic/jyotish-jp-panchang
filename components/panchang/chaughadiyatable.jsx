import React from "react";

export default function ChaugadiyaTable({ name, chaughadiya,type }) {

    return (
        <div className=" rounded-md flex flex-col gap-5 w-full">
            <div className="flex gap-2 items-center">
                {type ==="day" ?
                    <img src="/icons/day_sun.svg" className="w-[40px] mt-1"/>
:
                    <img src="/icons/moon_with_star.svg" className="w-[40px] mt-1"/>
                }
                <h2 className="text-zinc-800 text-xl md:text-3xl font-semibold">{name}</h2>
            </div>
            <div className="flex flex-col gap-2">
                {chaughadiya.map((item, i) => (
                <div
                    className={`flex gap-x-2 items-center justify-center`}
                    key={i}
                >
                    <p className={`${
                        item.muhurta === "チャラ"
                            ? "bg-sky-400"
                            :   item.muhurta === "アムリタ"  ||item.muhurta === "ローガ"  ||item.muhurta === "シュバ"
                            ? "bg-green-500"
                            : "bg-red-500"
                    } text-lg p-3 rounded font-cera_medium max-w-[150px] md:max-w-[200px] w-full border text-white font-semibold`}>{item.muhurta}</p>
                    <code className="text-zinc-700 rounded text-base md:text-lg p-3 w-full border">{item.time}</code>
                </div>
            ))}
            </div>
        </div>
    );
}



export function HoraTable({ name, hora,type }) {

    const signColor = {
        "木星":"bg-yellow-500",
        "火星":"bg-red-500",
"太陽":"bg-orange-500",
        "金星":"bg-white",
        "水星":"bg-green-400",
        "月":"bg-white",
        "土星":"bg-zinc-600",
    }




    return (
        <div className=" rounded-md flex flex-col gap-5 w-full">
            <div className="flex gap-2 items-center">
                {type ==="day" ?
                    <img src="/icons/day_sun.svg" className="w-[40px] mt-1"/>
                    :
                    <img src="/icons/moon_with_star.svg" className="w-[40px] mt-1"/>
                }
                <h2 className="text-zinc-800 text-xl md:text-3xl font-semibold">{name}</h2>
            </div>
            <div className="flex flex-col gap-2">
                {hora.map((item, i) => (
                    <div
                        className={`flex gap-x-2 items-center justify-center`}
                        key={i}
                    >
                        <p className={`${signColor[item.hora]} ${signColor[item.hora] ==="bg-white" ? "text-zinc-800":"text-white"} text-lg p-3 rounded font-cera_medium max-w-[100px] md:max-w-[200px] w-full border  font-semibold`}>{item.hora}</p>
                        <code className="text-zinc-700 rounded text-base md:text-lg p-3 w-full border">{item.time}</code>
                    </div>
                ))}
            </div>
        </div>
    );
}



