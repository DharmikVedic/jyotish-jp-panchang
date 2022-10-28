import {getDMS} from "../utils/gmsDegree";

export default function Planets({data}){



    return(
        <div>
        <table className="table">
<tbody>
{data.map((item,i)=>(
    <tr key={i}>
        <td className="w-[30%]">
            <span className={`${color[i]} text-[20px] font-zodiac`}>
                {sign[item.name]}
            </span>
            {" "} {item.name}
        </td>
        <td className="w-[40%]">
            <div className="flex justify-between">
                <span className={`${color[i]} text-[20px] font-zodiac`}>
                {zodiac[item.sign]}
            </span>
                {" "}{getDMS(item.normDegree)}
            </div>

        </td>
        <td className="w-[15%]">
            {item.isRetro == "true" ? "R" : "-" }
        </td>
        <td className="w-[15%]">
            {item.is_planet_set == "true" ? "C" : "-" }
        </td>
    </tr>
))}

</tbody>
        </table>
        </div>
    )
}


export   const sign = {
    "太陽":"A",
    "月":"B",
    "火星":"E",
    "水星":"C",
    "木星":"F",
    "金星":"D",
    "土星":"G",
    "さそり座":"H",
    "ネプチューン":"I",
    "冥王星":"J",
}


export const zodiac ={
    "牡羊座":"a",
    "みずがめ座":"k",
    "おうし座":"b",
    "ふたご座":"c",
    "癌":"d",
    "しし座":"e",
    "やぎ座":"j",
    "おとめ座":"f",
    "てんびん座":"g",
    "さそり座":"h",
    "いて座":"i",
    "うお座":"l"
}

export const color = ["text-blue-500","text-red-500","text-yellow-500","text-purple-500","text-green-500","text-violet-500","text-cyan-500","text-pink-500","text-orange-500","text-fuchsia-500"]
