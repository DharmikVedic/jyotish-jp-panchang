import {useRouter} from "next/router";

export default function FeativalYearCard({year,monthName}){
    return(
        <div className="flex flex-col  bg-white">
            <h6 className="text-white bg-[#FD766B] font-bold text-lg text-center py-2 md:text-xl">
                {monthName} {year}
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full divide-zinc-100 divide-y">
                {Array.from(Array(5)).map((_,i)=>(
                <FestivalCard key={i} />
            ))}
            </div>
        </div>
    )
}


function FestivalCard(){
    const router = useRouter();
    return(
        <div onClick={()=> router.push("/festival/detail-festival")} className="flex gap-3 items-center hover:bg-zinc-100 cursor-pointer">
            <img src="/panchang.png" className="w-[100px] px-5 py-2 bg-red-100" />
            <div className="flex flex-col  ">
                <h6 className="text-red-700 font-semibold md:text-lg">
                    Pausha Putrada Ekadashi
                </h6>
                <p>
                    January 13, 2022, Thursday
                </p>
            </div>
        </div>
    )
}








