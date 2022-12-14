import EventsCards from "../components/planetary_position/Eventscards";
import { encode,Base64 } from 'js-base64';
import {Decode, Encode} from "../components/utils/decode";

export default function Sample({text,signpage}){


    const e = Encode(JSON.stringify({
        "festival_date": "2022-12-20",
        "timezone": 9,
        "festival_name": "VAISHNAVA_SAPHALA_EKADASHI",
        "latitude": 35.6761919,
        "longitude": 139.6503106,
        "japanese": "ヴァイシュナヴァ・サファラー・エーカーダシー"
    }));


    return(
        <div className="max-w-4xl w-full mx-auto my-[50px]">
        <div className="flex flex-col w-full gap-7">
            <h2 className="md:text-3xl font-bold pb-3 border-b border-zinc-300 text-2xl">{text}</h2>
                <EventsCards signpage={signpage}/>
        </div>
        </div>
    )
}