import {useRouter} from "next/router";

export default function EventsCards({signpage}){
const signs = [
    {
        name: "Surya(Sun)",
        sign:"A",
        link: "sun",

    },
    {
        name: "Mangal(Mars)",
        sign:"E",
        link: "mars",
    },
    {
        name: "Budha(Mercury)",
        sign:"C",
        link: "mercury",
    },
    {
        name: "Guru(Jupiter)",
        sign:"F",
        link: "jupiter",
    },
    {
        name: "Shukra(Venus)",
        sign:"D",
        link: "venus",
    },
    {
        name: "Shani(Saturn)",
        sign:"G",
        link: "saturn",
    },
    {
        name: "Rahu",
        sign:"L",
        link: "rahu",
    },
]
const router = useRouter();
const handleLink = (planet)=>{
    const event_name = signpage ?  "sign" :  "nakshatra";
    const signs = planet;
    const query  = {
        pathname: `/planetary-events/${event_name}`,
        query: { planet: signs },
    }
    router.push(query);
}

    return(
        <div className="grid w-full sm:grid-cols-3 grid-cols-2 md:grid-cols-4 gap-5">
            {signs.map((item,i)=>(
                <div onClick={()=>handleLink(item.link)} key={i} className="border border-zinc-200 hover:shadow cursor-pointer bg-white hover:bg-zinc-100 justify-center items-center flex flex-col rounded pb-5 pt-2 px-5">
            <span className="font-zodiac text-[40px] ">
                {item.sign}
            </span>
                    <h5 className="text-base md:text-lg font-semibold">
                        {item.name}
                    </h5>
                </div>
            ))}

            </div>
    )
}