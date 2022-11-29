import {useContext} from "react";
import {PLaceContext} from "./placeContext";

const usePlace = ()=> {
    const context = useContext(PLaceContext);
    return {
        ...context
    }
}

export default usePlace;