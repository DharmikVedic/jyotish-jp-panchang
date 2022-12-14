import React, {useCallback, useEffect, useRef, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import dynamic from "next/dynamic";
const DynamicDatePicker = dynamic(()=> import("react-datepicker"));
import GooglePlaceAutoComplete from "../../pages/test";
import {FetchAPI} from "../utils/fetchapi";
import usePlace from "../context/usePlace";
export const month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

export default function Formdata(props) {
    const [state, setstate] = useState(new Date());
    const {place,ChangePlace} = usePlace();
    const [city, setcity] = useState(place);


    useEffect(()=>{
        if(place){
            setcity(place);
        }
    },[place]);




    const datestring = month[state.getMonth()] +" "  +state.getDate() + " , " + state.getFullYear();

    const passdata = useCallback((date,latlon)=>{
        const passData = ()=> {
            const time = {
                date:date.getDate(),
                day: date.getDate(),
                year: date.getFullYear(),
                month: date.getMonth() + 1,
            };
            let res = Object.assign({}, time, latlon);
            props.getinput(datestring, res,state);
        }
        passData();
    },[state,city])


    function getPreviousDay(date, operation) {
        const previous = new Date(date.getTime());
        let newdate = operation === "next" ? previous.setDate(date.getDate() + 1) : previous.setDate(date.getDate() - 1);
        // previous.setDate(date.getDate() - 1);
        setstate(new Date(newdate));
        return previous;
    }


    const incrementDate = () => {
       const newdate =  getPreviousDay(state, "next");
        passdata(newdate,city);
    }


    const decrementDate = () => {
        const newdate = getPreviousDay(state, "prev");
        passdata(newdate,city);
    }


    // calculate timezone
    const Timezone = async  (lat,lng) =>{
        const date = (state.getMonth() + 1) +"-"+state.getDate()+"-"+state.getFullYear();
            const timezone = await FetchAPI("timezone_with_dst",{latitude: parseFloat(lat),longitude:parseFloat(lng),date:date});
            return {timezone:timezone.timezone, tzone: timezone.timezone };
    }

    const largeDevice = async(input) => {
        if (input !== null) {
            const lat = parseFloat(input.lat);
            const lon = parseFloat(input.lng);
            const timezone =  await Timezone(input.lat,input.lng);
            setcity({ lat: lat, lon: lon,name:input.name,...timezone });
            ChangePlace({lat: lat, lon: lon,name:input.name,...timezone});
            passdata(state,{ lat: lat, lon: lon,...timezone });
        }
    };


    const handleDate = (date)=>{
        setstate(date);
        passdata(date,city);
    }



    return (
        <>
            {/* month list */}
            <div className="border-b gap-y-4  flex gap-x-16 justify-center w-full md:flex-row flex-col px-5">

                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex gap-x-10 w-full py-3 md:flex-row flex-col lg:w-auto w-full gap-y-3 md:items-end">
                        <div className="flex items-center gap-x-1  w-full md:max-w-max ">
                            <span>
                                <img src="/icons/date.png" className="w-[30px]"/>
                            </span>
                            <DynamicDatePicker
                                selected={state}
                                onChange={(date) => handleDate(date)}
                                dateFormat="MMMM d, yyyy"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                className="border border-b-[3px] w-[180px] border-zinc-300 px-3 py-2 focus:border-sky-500 outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-x-1 w-full flex-grow">
<span>
    <img src="/icons/place.png" className="w-[25px]"/>
</span>
                            <GooglePlaceAutoComplete defaultPlace={city?.name} passLatLong={largeDevice}/>
                        </div>

                        <div className="rounded-md gap-3 self-end text-sm flex w-full ">
                            <button
                                onClick={decrementDate}
                                className="rounded text-white flex items-center py-2 px-1 justify-center  font-bold bg-[#FA7869] hover:bg-[#FA4848] w-full"
                            >
                                <span className="mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
</svg>

                                </span>
                                Prev Day
                            </button>
                            <button
                                onClick={()=> handleDate(new Date())}
                                className=" text-white rounded py-2 px-5 font-bold bg-[#FA7869] hover:bg-[#FA4848] w-full "
                            >
                                Today
                            </button>
                            <button
                                onClick={incrementDate}
                                className="rounded text-white flex font-bold justify-center items-center py-2 w-full px-5 font-semibold bg-[#FA7869] hover:bg-[#FA4848]"
                            >
                                Next Day
                                <span className="mt-1">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
</svg>


                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
