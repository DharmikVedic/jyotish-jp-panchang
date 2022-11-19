export default function EventsCards(){
const signs = [
    {
        name: "Surya(Sun)",
        sign:"A",
        link: "/",

    },
    {
        name: "Mangal(Mars)",
        sign:"E",
        link: "/",
    },
    {
        name: "Budha(Mercury)",
        sign:"C",
        link: "/",
    },
    {
        name: "Guru(Jupiter)",
        sign:"F",
        link: "/",
    },
    {
        name: "Shukra(Venus)",
        sign:"D",
        link: "/",
    },
    {
        name: "Shani(Saturn)",
        sign:"G",
        link: "/",
    },
    {
        name: "Rahu",
        sign:"L",
        link: "/",
    },
]



    return(
        <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 gap-5">
            {signs.map((item,i)=>(
                <div key={i} className="border border-zinc-200 hover:shadow cursor-pointer bg-white hover:bg-zinc-100 justify-center items-center flex flex-col rounded pb-5 pt-2 px-5">
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