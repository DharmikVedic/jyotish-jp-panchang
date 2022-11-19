import {convert_Date_to_redable} from "./festivalCard";
export const tithiid = {
    11:"Ashtami Tithi"
}

export function SankrantiDetail({name,punya,mahapunya,festival_date,moment}) {
    return(
    <>
        <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
            <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                {name}  Punya Kaal Muhurta
            </div>
            <h6 className="text-center md:text-lg">
                {name} <span className="text-red-600 font-semibold">on {convert_Date_to_redable(festival_date)}</span>
            </h6>
            {/* punya kaal */}
                    <div className="flex bg-zinc-50 border-2 md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                        <div>

                        <p className="text-yellow-600 font-semibold">
                            {name} Punya Kala - {punya.start_time} to {punya.end_time}
                        </p>
                        {/*    <p className="text-base text-zinc-500">*/}
                        {/*    Duration - 08 Hours 42 Mins*/}
                        {/*</p>*/}
                        </div>
                        <div>
                            <p className="text-yellow-600 font-semibold">
                                {name} Maha Punya Kala -  {mahapunya.start_time} to {mahapunya.end_time}
                            </p>
                            {/*<p className="text-base text-zinc-500">*/}
                            {/*    Duration - 08 Hours 42 Mins*/}
                            {/*</p>*/}
                        </div>
                    </div>
            <p className="md:text-lg">
                {name} Moment - {moment}
            </p>

        </div>
    </>
)
}


export function MuhuratDetail({hightlight,name,muhurtastart,muhurtend,festival_date,tithistart,tithiend,tithiname,muhurattext}) {


    return(
        <>
            <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
                <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                    {name} {hightlight ? hightlight : ""}
                </div>
                <h6 className="text-center md:text-lg">
                    {name} <span className="text-red-600 font-semibold">on {convert_Date_to_redable(festival_date)}</span>
                </h6>
                {/* punya kaal */}
                <div className="flex bg-zinc-50 border-2 md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                    <div>

                        <p className="text-yellow-600 font-semibold">
                            {name} {muhurattext ? muhurattext : "Puja Muhurat"} - {muhurtastart} to {muhurtend}
                        </p>
                        {/*<p className="text-base text-zinc-500">*/}
                        {/*    Duration - 08 Hours 42 Mins*/}
                        {/*</p>*/}
                    </div>
                </div>
                <p className="md:text-lg">
                    {tithiname} Tithi Begins - <span className="text-yellow-600">{tithistart}</span>
                    <br/>
                    {tithiname} Tithi Ends - <span className="text-yellow-600">{tithiend}</span>
                </p>
            </div>
        </>
    )
}

export function MuhutatDate({festival_date,name,tithi}){
    return(
        <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
            <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                {name} Timings
            </div>
            <h6 className="text-center md:text-lg">
                {name} <span className="text-red-600 font-semibold">on {convert_Date_to_redable(festival_date)}</span>
            </h6>
            <p className="md:text-lg">
                {tithiid[tithi['tithi_id']]} Begins - <span className="text-yellow-600">{tithi.tithi_start_time}</span>
                <br/>
                {tithiid[tithi['tithi_id']]} Ends - <span className="text-yellow-600">{tithi.tithi_end_time}</span>
            </p>
        </div>
    )
}

export function MuhuratArrayDetail({hightlight,name,muhurta,festival_date,tithi,muhurattext}) {

    return(
        <>
            <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
                <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                    {name} {hightlight ? hightlight : ""}
                </div>
                <h6 className="text-center md:text-lg">
                    {name} <span className="text-red-600 font-semibold">on {convert_Date_to_redable(festival_date)}</span>
                </h6>
                {/* punya kaal */}
                {muhurta.map((item,i)=>(
                    <div key={i} className="flex bg-zinc-50 border-2 md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                        <div>

                            <p className="text-yellow-600 font-semibold">
                                {muhurattext[i]} - {item.muhurta_start_time} to {item.muhurta_end_time}
                            </p>
                            {/*<p className="text-base text-zinc-500">*/}
                            {/*    Duration - 08 Hours 42 Mins*/}
                            {/*</p>*/}
                        </div>
                    </div>
                ))}
                <p className="md:text-lg">
                    {tithiid[tithi['tithi_id']]} Begins - <span className="text-yellow-600">{tithi.tithi_start_time}</span>
                    <br/>
                    {tithiid[tithi['tithi_id']]} Ends - <span className="text-yellow-600">{tithi.tithi_end_time}</span>
                </p>
            </div>
        </>
    )
}
