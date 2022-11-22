import {Heading} from "../commoText";
import React from "react";
import {useRouter} from "next/router";

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

export function Text2({text,value}){
    return(
        <div className="flex gap-2 py-1 text-[17px] items-center">
            <h6 className="font-semibold text-yellow-600">
                {text}
            </h6>
            <p className="text-[16px] ">
                {value}
            </p>
        </div>
    )
}