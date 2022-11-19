import {useRouter} from "next/router";
import {mL} from "../../pages/festival";

export default function FeativalYearCard({year,monthName,festival}){
    return(
        <div   className="flex flex-col  bg-white">
            <h6 className="text-white bg-[#FD766B] font-bold text-lg text-center py-2 md:text-xl">
                {monthName} {year}
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full divide-zinc-100 divide-y">
                {festival.map((fest,i)=>(
                <FestivalCard data={fest} key={i} />
            ))}
            </div>
        </div>
    )
}


function FestivalCard({data}){
    const router = useRouter();
    let date = new Date(data.year,data.month,data.date)
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const url = data.festival_key.toLowerCase()
    return(
        <div onClick={()=> router.push(`/festival/${url}`)} className="flex gap-3 items-center hover:bg-zinc-100 cursor-pointer">
            <img src="/panchang.png" className="w-[100px] px-5 py-2 bg-red-100" />
            <div className="flex flex-col  ">
                <h6 className="text-red-700 font-semibold md:text-lg">
                    {data.festival}
                </h6>
                <p>
                    {mL[data.month-1]} {data.date}, {data.year} , {daysInWeek[date.getDay()]}
                </p>
            </div>
        </div>
    )
}


export function convert_Date_to_redable(data){
    let date = new Date(data)
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return mL[date.getMonth()] + ", " +date.getDate() + " " +date.getFullYear()+", "+daysInWeek[date.getDay()];
}








