import {getDMS} from "../utils/gmsDegree";
import {color, sign, zodiac} from "../panchang/planets";

export default function PlanetTable({data}){
    return(
        <div className="min-w-[800px]">
            <table className="table">
                <thead className="bg-[#D8894E]">
                <tr className="text-white text-left">
                    <th className="th">
                        惑星
                    </th>
                    <th className="th">
                        逆行
                    </th>
                    <th className="th">
                        星座
                    </th>
                    <th className="th">
                        星座支配星
                    </th>
                    <th className="th">
                        度数
                    </th>
                    <th className="th">
                        ナクシャトラ
                    </th>
                    <th className="th">
                        ナクシャトラ支配星
                    </th>
                    <th className="th">
                        ハウス
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((item,i)=>(
                    <tr key={i}>
                        <td className="w-[10%] ">
            <span className={`${color[i]} text-[20px] font-zodiac`}>
                {sign[item.name]}
            </span>
                            {" "} {item.name}
                        </td>
                        <td className="w-[10%] ">
                            {item.isRetro == "true" ? "R" : "-" }
                        </td>
                        <td className="w-[15%]">
            <span className={`${color[i]} text-[20px] font-zodiac`}>
                {zodiac[item.sign]}
            </span>
                            {" "} {item.sign}
                        </td>
                        <td className="w-[10%] ">
            <span className={`${color[i]} text-[20px] font-zodiac`}>
                {sign[item.signLord]}
            </span>
                            {" "} {item.signLord}
                        </td>
                        <td className="w-[10%] ">
                                {getDMS(item.normDegree)}
                        </td>

                        <td className="w-[15%] ">
            <span className={`${color[i]} text-[20px] font-zodiac`}>
                {sign[item.nakshatra]}
            </span>
                            {" "} {item.nakshatra}
                        </td>
                        <td className="w-[20%] ">
            <span className={`${color[i]} text-[20px] font-zodiac`}>
                {sign[item.nakshatraLord]}
            </span>
                            {" "} {item.nakshatraLord}
                        </td>
                        <td className="w-[10%] ">
                            {item.house}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
    )
}