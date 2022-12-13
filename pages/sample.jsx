import EventsCards from "../components/planetary_position/Eventscards";
import { encode, decode } from 'js-base64';

export default function Sample({text,signpage}){


    const e = encode(JSON.stringify({"festival_date":"2022-4-2","timezone":9,"festival_name":"CHANDRA_DARSHAN","latitude":35.6761919,"longitude":139.6503106,"japanese":"チャンドラ・ダルシャナ"} ));
console.log(decode("eyJmZXN0aXZhbF9kYXRlIjoiMjAyMi0zLTQiLCJ0aW1lem9uZSI6OSwiZmVzdGl2YWxfbmFtZSI6IlBIVUxFUkFfRE9PSiIsImxhdGl0dWRlIjozNS42NzYxOTE5LCJsb25naXR1ZGUiOjEzOS42NTAzMTA2LCJqYXBhbmVzZSI6IuODl"));

    return(
        <div className="max-w-4xl w-full mx-auto my-[50px]">
        <div className="flex flex-col w-full gap-7">
            <h2 className="md:text-3xl font-bold pb-3 border-b border-zinc-300 text-2xl">{text}</h2>
                <EventsCards signpage={signpage}/>
        </div>
        </div>
    )
}