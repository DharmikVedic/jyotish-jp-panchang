export default function FestivalDetailCard(){
    return(
        <div className="relative grid grid-cols-1  gap-10 z-[0] before:z-[-1] before:absolute before:top-[150px] before:left-0 before:w-full md:before:h-[220px] before:rounded md:p-10 before:bg-sky-500">
            <div className="flex flex-col gap-4">
                <div className="border-4 flex flex-col gap-5 justify-between pt-5 border-white text-white text-center bg-[#FD766B] w-full h-[300px]">
                   <div className="h-full flex flex-col gap-2 justify-center">
                       <h6 className="font-semibold md:text-xl text-lg">
                       Pausha Putrada Ekadashi Vrat
                   </h6>
                    <h2 className="md:text-[60px] text-[60px] font-bold">
                        13th
                    </h2>
                    <h5 className="md:text-2xl text-xl ">
                        January 2022
                    </h5>
                   </div>
<h3 className="font-bold md:text-xl text-lg bg-red-700/50 py-3">
    Thursday / गुरूवार
</h3>
                </div>
            </div>
{/*            <div className="flex flex-col gap-4">*/}
{/*                <h6 className="text-center font-semibold text-lg md:text-xl">*/}
{/*                    /!* place name *!/*/}
{/*                    Pausha Putrada Paush_putrada_ekadashi Vrat*/}
{/*                </h6>*/}
{/*                <div className="border-4 border-white p-2 bg-white w-full h-[300px]">*/}
{/*<img src="/imgs/abhijit-muhrta.png" className="w-full h-full"/>*/}
{/*                </div>*/}
{/*            </div>*/}
        </div>
    )
}

export  function Detail(){
    return(
        <div className="bg-white flex flex-col gap-8 p-5 md:p-10">
            <h6 className="text-center md:text-xl text-red-600 font-semibold text-lg">
                Pausha Putrada Ekadashi on Thursday, January 13, 2022
            </h6>
            <div className="bg-gradient-to-tl from-red-400 via-orange-400 to-sky-400 p-[2px] rounded">
                <div className="flex flex-col gap-2 bg-white p-5 text-center rounded">
                <p>
                On 14th Jan, Parana Time - <span className="text-yellow-600">07:22 AM</span> to <span className="text-yellow-600">09:06 AM</span>
                </p>
                <p>
                On Parana Day Dwadashi End Moment - <span className="text-yellow-600">05:49 PM</span>
                </p>
            </div>
            </div>
<p>
    <span className="font-semibold">Ekadashi Tithi Begins</span> - <span className="text-yellow-600">12:19 PM</span> on <span className="text-yellow-600">Jan 12, 2022</span>
    <br/>
    <span className="font-semibold">Ekadashi Tithi Ends</span> - <span className="text-yellow-600">03:02 PM</span> on <span className="text-yellow-600">Jan 13, 2022</span>
</p>

        </div>
    )
}