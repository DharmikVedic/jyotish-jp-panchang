import {Heading} from "../commoText";
import React from "react";
import {useRouter} from "next/router";
import {Encode} from "../utils/decode";
import Link from "next/link";

export default function PanchangCard({title,children,style,link,hideborder}){
    const router = useRouter();
    return(
        <div className={`shadow-lg ${hideborder ? "" :"border border-zinc-300"}  pb-10 relative rounded-md`}>
          <Heading style={style}>
              {title}
          </Heading>
                   {children}
            {link &&
            <button onClick={() => router.push(link ? link : "/")}
                    className="text-sky-500 bg-zinc-100 rounded-b-md bottom-0 absolute  flex py-2 text-lg justify-end hover:underline border-t w-full border-zinc-300 px-5 items-center ">
                More
                <span className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"/>
</svg>
                </span>
            </button>
            }
        </div>
    )
}

export function Text({text,value}){
    return(
        <div className="flex gap-2 py-1 text-[17px] items-center">
            <h6 className="font-semibold ">
                {text}
            </h6> :
            <p className="text-yellow-600" dangerouslySetInnerHTML={{__html:value}}></p>
        </div>
    )
}

export function Text2({text,value,data,inputdata}){
    const router = useRouter();
    // const handleLink =async()=>{
        const date = data.year + "-"+ data.month + "-"+ data.date;
        // const festival_key = data.name.split(" ").map(item=> item.toUpperCase()).join("_");
        const url = data?.festival_key.toLowerCase();
        const object = {"festival_date":date,"timezone":9,"festival_name":data?.festival_key,"latitude":inputdata.lat,"longitude":inputdata.lon,"japanese":text};
        const encode = Encode(JSON.stringify(object));
        // await router.push({
        //     pathname:`/festival/${url}`,
        //     query:{
        //         q:encode
        //     }
        // })
    // }


 return(

        <a target="_blank" href={`/festival/${url}?q=${encode}`} className="flex cursor-pointer  text-left flex-wrap gap-2 py-1 text-[17px] items-center">
            <h6 className="font-semibold text-yellow-600">
                {text}
            </h6>
            <p className="text-[16px] ">
                {value}
            </p>
        </a>
    )
}
// target="_blank" href={`/festival/${url}?q=${encode}`}