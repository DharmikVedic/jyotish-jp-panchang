import {useState} from "react";

export function SunTable({thead,children}){
    const [collapse,setcollapse] = useState(false);
    const handleCollapse =()=>{
        setcollapse(prev=> !prev);
    }
    return(
        <table className="table min-w-[600px] w-full overflow-x-scroll">
            <thead>
            <tr className="text-center">
                <th colSpan={4} className="relative">
                    {thead}
                    <button onClick={handleCollapse} className="absolute top-1/2 -translate-y-1/2 right-5">
                        <span>
                            <svg className={`w-[20px] h-[20px] ${collapse ? "rotate-180":""} fill-white duration-[150ms] ease-in`} enableBackground="new 0 0 48 48" id="Layer_3" version="1.1" viewBox="0 0 48 48" ><polygon points="48,35.562 0,35.562 24,12.438 "/></svg>
                        </span>
                    </button>
                </th>
            </tr>
            </thead>
            {!collapse &&
            <>
                {children}
            </>
            }
        </table>
    )
}