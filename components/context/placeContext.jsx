import React, {createContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Decode, Encode} from "../utils/decode";

export const PLaceContext = createContext();

const PlaceContextProvider = ({children}) => {
    const [place, setplace] = useState(null);

    // get cookie data
    const getSession = Cookies.get('place');
// default  country and place
    const defaultplace = {
        lat: 35.6761919,
        lon: 139.6503106,
        name: "Tokyo,japan",
        timezone:9,
        tzone:9
    };

    let date = new Date();
    let inFifteenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);


    useEffect(()=>{
        if(getSession && !place){
            const decode = Decode(getSession);
            const parse = JSON.parse(decode);
            setplace(parse);
        }
        else{
             setplace(defaultplace);
             Cookies.set('place',Encode(JSON.stringify(defaultplace)),{ expires: inFifteenMinutes });
        }
    },[]);


    const ChangePlace = (val) => {
        setplace(val);
        Cookies.set('place',Encode(JSON.stringify(val)),{ expires: inFifteenMinutes});
    }

    return (
        <PLaceContext.Provider value={{place, ChangePlace}}>
                {children}
        </PLaceContext.Provider>
    )
}
export default PlaceContextProvider;




