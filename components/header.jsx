import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Header(){
const [mobileMenu,setmobilemenu] = useState(false);
const [y,sety] = useState(false);

    const links = [
        {name:"ホーム",link:"/"},
        {name:"パンチャーンガ",link:"/panchang"},
        {name:"ムフールタ",link:"/muhurat"},
    ]

    const handleMenu=()=>{
        setmobilemenu(prev=> !prev);
    }


    useEffect(()=>{
        window.addEventListener('scroll', (e) => handleNavigation(e))
        const handleNavigation = (e) => {
            const window1 = e.currentTarget
            const scroll = window1.pageYOffset || document.documentElement.scrollTop
            if (scroll > 350) {
                sety(true)
            } else {
                sety(false)
            }
        }
        return ()=>window.removeEventListener('scroll',(e)=>handleMenu(e));
    },[])



  //  無料登録


    return(
        <header className={`${y ? "sticky top-0 z-[2] duration-[200ms] ease-in-out" : ""} w-full bg-white shadow`}>
           <div className="max-w-6xl justify-between mx-auto md:items-center flex gap-x-10 gap-y-4 px-5 py-4">
               <Link href="/" passHref>
                <img src="/imgs/logo.png" className="w-[220px] cursor-pointer" alt="jyotish jp"/>
            </Link>
               <button onClick={handleMenu} className="md:hidden block text-zinc-600">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`${mobileMenu ? "rotate-90":""} w-5 h-5`}>
                       <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                   </svg>
               </button>

            <div className="hidden md:flex  gap-5">
                {links.map((item,i)=>(
                    <div key={i}>
                        <Link href={item.link}>
                            <a  className="border-b-2 hover:border-zinc-800 pb-1 border-transparent duration-[150ms] ease-in">
                                {item.name}
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
           </div>

            {mobileMenu &&
            <div className="flex flex-col w-full  px-10 pb-2 md:hidden  gap-3">
                {links.map((item, i) => (
                    <div key={i} className="w-full pb-1 border-b border-zinc-300">
                        <Link href={item.link}>
                            <a  onClick={handleMenu} className=" text-[14px] w-full duration-[150ms] ease-in">
                                {item.name}
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            }
        </header>
    )
}