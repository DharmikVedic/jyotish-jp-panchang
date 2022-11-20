import {hindiWeekDay, mL, weekDay} from "../../pages/festival";
import Day from "../utils/dayConvert";
import {convert_Date_to_redable} from "./festivalCard";

export default function FestivalDetailCard({festival_name,date}){
    const ConvertDate = new Date(date);
    const weekday = weekDay[ConvertDate.getDay()];
    const hindiWeekDayName = hindiWeekDay[ConvertDate.getDay()];
    const month  = mL[ConvertDate.getMonth()];
    const year = ConvertDate.getFullYear();
    const currentDay = ConvertDate.getDate();

    return(
        <div className="relative grid grid-cols-1  gap-10 z-[0] before:z-[-1] before:absolute before:top-[150px] before:left-0 before:w-full md:before:h-[220px] before:rounded md:p-10 before:bg-sky-500">
            <div className="flex flex-col gap-4">
                <div className="border-4 flex flex-col gap-5 justify-between pt-5 border-white text-white text-center bg-[#FD766B] w-full h-[300px]">
                   <div className="h-full flex flex-col gap-2 justify-center">
                       <h6 className="font-semibold md:text-2xl text-xl">
                           {festival_name}
                   </h6>
                    <h2 className="md:text-[60px] text-[60px] font-bold">
                        {Day(currentDay)}
                    </h2>
                    <h5 className="md:text-2xl font-semibold text-xl ">
                        {month} {year}
                    </h5>
                   </div>
<h3 className="font-bold md:text-xl text-lg bg-red-700/50 py-3">
    {weekday} / {hindiWeekDayName}
</h3>
                </div>
            </div>
        </div>
    )
}
export function DetailPanchami({
                                   name,
                                   muhurat,
                                   tithistart,
                                   tithiend,
                                   duration,
                                   festival_date,
                               }) {
    return (
        <div className="bg-white flex flex-col gap-8 p-5 md:p-10">
            <h6 className="text-center md:text-xl  text-lg">
                {name}{" "}
                <span className="text-red-600 font-semibold">
          on {convert_Date_to_redable(festival_date)}
        </span>
            </h6>
            {muhurat.map((item, i) => (
                <div
                    key={i}
                    className="bg-gradient-to-tl from-red-400 via-orange-400 to-sky-400 p-[3px] rounded"
                >
                    <div className="flex md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                        <p>
                            Vasant Panchami Muhurat -{" "}
                            <span className="text-yellow-600">{item.start_time}</span> to{" "}
                            <span className="text-yellow-600">{item.end_time}</span>
                        </p>
                        <p className="md:text-lg">
                            Duration - <span className="text-yellow-600">{duration}</span>
                        </p>
                    </div>
                </div>
            ))}
            <p className="md:text-lg">
                Panchami Tithi Begins -{" "}
                <span className="text-yellow-600">{tithistart}</span>
                <br />
                Panchami Tithi Ends -{" "}
                <span className="text-yellow-600">{tithiend}</span>
            </p>
        </div>
    );
}

export  function Detail({name,muhurat,tithistart,tithiend,harivarsra,festival_date}){
    return(
        <div className="bg-white flex flex-col gap-8 p-5 md:p-10">
            <h6 className="text-center md:text-xl  text-lg">
                {name} <span className="text-red-600 font-semibold">on {convert_Date_to_redable(festival_date)}</span>
            </h6>
            {muhurat.map((item,i)=> (
                <div key={i} className="bg-gradient-to-tl from-red-400 via-orange-400 to-sky-400 p-[3px] rounded">
                    <div className="flex md:text-lg flex-col gap-2 bg-white p-5 text-center rounded">
                        <p>
                            Parana Time - <span className="text-yellow-600">{item.start_time}</span> to <span className="text-yellow-600">{item.end_time}</span>
                        </p>
                        <p className="md:text-lg">
                          On Paran Time Hari Vasara End Moment - <span className="text-yellow-600">{harivarsra}</span>
                        </p>
                    </div>
                </div>
            ))}
<p className="md:text-lg">
  Ekadashi Tithi Begins - <span className="text-yellow-600">{tithistart}</span>
    <br/>
    Ekadashi Tithi Ends - <span className="text-yellow-600">{tithiend}</span>
</p>

        </div>
    )
}