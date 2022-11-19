import EventsCards from "../components/planetary_position/Eventscards";

export default function Sample({text,signpage}){

    return(
        <div className="max-w-4xl w-full mx-auto my-[50px]">
        <div className="flex flex-col w-full gap-7">
            <h2 className="md:text-3xl font-bold pb-3 border-b border-zinc-300 text-2xl">{text}</h2>
                <EventsCards signpage={signpage}/>
        </div>
        </div>
    )
}