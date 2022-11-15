import React, {useEffect, useRef, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import dynamic from "next/dynamic";
const DynamicDatePicker = dynamic(()=> import("react-datepicker"));
import GooglePlaceAutoComplete from "../../pages/test";


export default function FestivalFormdata(props) {
    const [state, setstate] = useState(new Date());
    const defaultplace = {
        country: "Japan",
        id: "Tokyo,japan",
        lat: 35.6761919,
        lon: 139.6503106,
        name: "Tokyo,japan",
    };

    const [city, setcity] = useState(defaultplace);

    const datestring = state.getFullYear();
    const [day, setDays] = React.useState(0);

    useEffect(() => {
        let mouted = true;
        const passData = ()=> {
            const time = {
                day: state.getDate(),
                year: state.getFullYear(),
                month: state.getMonth() + 1,
            };
            let res = Object.assign({}, time, city);
            props.getinput(datestring, res,state);
        }
        if(mouted){
            passData();
        }
        return () => mouted = false;
    }, [state, city,day]);

    const incrementDate = React.useCallback(() => {
        setDays((prevState) => prevState + 1);
        setstate(
            (prevState) => new Date(new Date().setFullYear(new Date().getFullYear() + (day+1)))
        );
    }, [day]);

    const decrementDate = React.useCallback(() => {
        setDays((prevState) => prevState - 1);
        setstate(
            (prevState) => new Date(new Date().setFullYear(new Date().getFullYear() - (day-1)))
        );
    }, [day]);

    const largeDevice = (input) => {
        if (input !== null) {
            const lat = parseFloat(input.lat);
            const lon = parseFloat(input.lng);
            setcity({ lat: lat, lon: lon });
        }
    };


    return (
        <>
            {/* month list */}
            <div className="border-b gap-y-4  flex gap-x-16 justify-center w-full md:flex-row flex-col px-5">

                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex gap-x-10 w-full py-3 md:flex-row flex-col lg:w-auto w-full gap-y-3 md:items-end">
                        <div className="flex items-center gap-x-1 w-full flex-grow">
<span>
    <img src="/icons/place.png" className="w-[25px]"/>
</span>
                            <GooglePlaceAutoComplete defaultPlace="Tokyo, Japan" passLatLong={largeDevice}/>
                        </div>
                        <div className="flex items-center gap-x-1  w-full md:max-w-max ">
                            <span>
                                <img src="/icons/date.png" className="w-[30px]"/>
                            </span>

                            <DynamicDatePicker
                                selected={state}
                                onChange={(date) => setstate(date)}
                                showYearPicker
                                dateFormat="yyyy"
                                yearItemNumber={9}
                                className="border border-b-[3px] w-[180px] border-zinc-300 px-3 py-2 focus:border-sky-500 outline-none"
                            />
                            {/*<DynamicDatePicker*/}
                            {/*    selected={state}*/}
                            {/*    onChange={(date) => setstate(date)}*/}
                            {/*    dateFormat="MMMM d, yyyy"*/}
                            {/*    showMonthDropdown*/}
                            {/*    showYearDropdown*/}
                            {/*    dropdownMode="select"*/}
                            {/*    className="border border-b-[3px] w-[180px] border-zinc-300 px-3 py-2 focus:border-sky-500 outline-none"*/}
                            {/*/>*/}
                        </div>

                        <div className="rounded-md gap-3 self-end text-sm flex w-full ">
                            <button
                                onClick={decrementDate}
                                className="rounded text-white flex items-center py-2 px-1 justify-center  font-semibold bg-[#FA7869] hover:bg-[#FA4848] w-full"
                            >
                                <span className="mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
</svg>

                                </span>
                                Prev Year
                            </button>
                            <button
                                onClick={()=> {setstate(new Date()); setDays(0)}}
                                className=" text-white rounded py-2 px-5 font-semibold bg-[#FA7869] hover:bg-[#FA4848] w-full "
                            >
                                Today
                            </button>
                            <button
                                onClick={incrementDate}
                                className="rounded text-white flex  justify-center items-center py-2 w-full px-5 font-semibold bg-[#FA7869] hover:bg-[#FA4848]"
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
