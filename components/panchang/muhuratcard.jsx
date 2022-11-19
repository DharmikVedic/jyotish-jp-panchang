import Link from "next/link";

export default function MuhuratCard({title,image,image_alt,link}){
    return(
        <Link href={link}>
            <a className="bg-white border shadow hover:shadow-xl cursor-pointer border-zinc-100 justify-between flex flex-col gap-6 items-center md:p-8 p-5">
            <div>
                <img src={image} className="h-[100px]" alt={image_alt}/>
            </div>
            <h3 className="font-semibold text-xl">
                {title}
            </h3>
        </a>
        </Link>
    )
}