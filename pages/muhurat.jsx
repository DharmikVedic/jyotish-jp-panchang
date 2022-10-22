import MuhuratCard from "../components/panchang/muhuratcard";

export default function Muhurat(){
    return(
        <div>
            <div className="bg-gradient-to-r from-sky-500 to-red-500 w-full py-5">
                <h1 className=" text-3xl text-white max-w-6xl mx-auto px-5 md:px-10 font-bold">
                Hindu Muhurat
            </h1>
            </div>

            <div className="grid py-10 sm:grid-cols-2 grid-cols-1 md:grid-cols-4 md:gap-10 gap-5 max-w-6xl mx-auto md:px-10  px-5">
                <MuhuratCard link="/panchang/abhijit-muhurat" image="/imgs/abhijit-muhrta.png" image_alt='abhijit-muhurat' title="Abhijit Muhurat"/>
                <MuhuratCard link="/panchang/chaughadiya" image="/imgs/chogadiya-muhrta.png" image_alt='chogadiya-muhrta' title="Chogadiya Muhrta"/>
                <MuhuratCard link="/panchang/hora" image="/imgs/hora.png" image_alt='hora-muhrta' title="Hora Muhrta"/>

            </div>
        </div>
    )
}






