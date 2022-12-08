import React, {useCallback, useEffect, useRef, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import dynamic from "next/dynamic";
const DynamicDatePicker = dynamic(()=> import("react-datepicker"));
import GooglePlaceAutoComplete from "../../pages/test";
import {FetchAPI} from "../utils/fetchapi";
export const month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

export default function FormYeardata(props) {
    const currentDate =new Date();
    const firstDayDate = currentDate.setDate(1);

    const [state, setstate] = useState(new Date(firstDayDate));
    const defaultplace = {
        country: "Japan",
        id: "Tokyo,japan",
        lat: 35.6761919,
        lon: 139.6503106,
        name: "Tokyo,japan",
        timezone:9
    };

    const [city, setcity] = useState(defaultplace);


    const datestring = month[state.getMonth()] +" "  +state.getDate() + " , " + state.getFullYear();

    const passdata = useCallback((date,latlon)=>{
        const passData = ()=> {
            const time = {
                date: date.getDate(),
                year: date.getFullYear(),
                month: date.getMonth() + 1,
            };
            let res = Object.assign({}, time,city, latlon);
            props.getinput(datestring, res,state)
        }
        passData()
    },[state,city])



    function getPreviousDay(date, operation) {
        const previous = new Date(date.getTime());
        let newDate = operation === "next" ? previous.setFullYear(date.getFullYear() + 1) : previous.setFullYear(date.getFullYear() - 1);
        // previous.setDate(date.getDate() - 1);
        setstate(new Date(newDate));
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
        return {timezone: timezone.timezone };
    }

    const largeDevice = async(input) => {
        if (input !== null) {
            const lat = parseFloat(input.lat);
            const lon = parseFloat(input.lng);
            const timezone =  await Timezone(input.lat,input.lng);
            setcity({ lat: lat, lon: lon,...timezone });
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
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                className="border border-b-[3px] cursor-pointer w-[180px] border-zinc-300 px-3 py-2 focus:border-sky-500 outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-x-1 w-full flex-grow">
<span>
    <img src="/icons/place.png" className="w-[25px]"/>
</span>
                            <GooglePlaceAutoComplete defaultPlace="Tokyo, Japan" passLatLong={largeDevice}/>
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
                                Prev Year
                            </button>
                            <button
                                onClick={()=> handleDate(new Date())}
                                className=" text-white rounded py-2 px-5 font-bold bg-[#FA7869] hover:bg-[#FA4848] w-full "
                            >
                                Current Year
                            </button>
                            <button
                                onClick={incrementDate}
                                className="rounded text-white flex font-bold justify-center items-center py-2 w-full px-5 font-semibold bg-[#FA7869] hover:bg-[#FA4848]"
                            >
                                Next Year
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

function PopupCountry(props){

    const ref = useRef(null);
    const [city,setcity] = useState(null);
    const handleClickOutside =(event) => {
        if(ref.current && !ref.current.contains(event.target)){
            props.passactive(true);
        }
    }

    const passdata =(e) => {
        setcity(e);
    }
    const handlesubmit =(e) =>{
        props.submit(e);
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });


    return(
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full z-20 flex justify-center items-center">
            <div className="absolute w-full h-full bg-gray-700 opacity-80"/>
            <div ref={ref} onClick={(e)=> handleClickOutside(e)} className="max-h-3/4 max-w-xl mx-auto flex flex-col gap-5 bg-white rounded-md fixed  my-10 p-5">
                <div className="flex justify-between border-b border-gray-200 py-1">
                    <h1 className="capitalize text-2xl text-gray-700 sm:text-3xl">Select Panchang Place</h1>
                    <button onClick={() => props.passactive(true)} className="w-8 h-8 rounded-full bg-gray-400 hover:bg-gray-600 flex items-center justify-center"><img src="/icons/close.png" width={14} height={14} alt="close"/></button>
                </div>
                <div className="flex flex-col gap-y-2 w-full flex-grow">
                    <Sample passdata={passdata} selected={[props.defaultplace]} />
                </div>
                <button onClick={()=> props.handle(city)} className="bg-azure-500 text-white p-3 rounded-md">Submit</button>
            </div>
        </div>
    )
}
