import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export default function GooglePlaceAutoComplete({passLatLong,defaultPlace}) {
    const [address, setAddress] = React.useState(defaultPlace);
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        passLatLong(latLng)
        setAddress(value);
        setCoordinates(latLng);
    };

    return (
        <>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="w-full z-50 relative">
                        <input className="border focus:border-sky-500  outline-none px-5 w-full h-[40px] border-zinc-300 text-base " {...getInputProps({ placeholder: "Type address" })} />

                        <div className="border w-full absolute top-[100%] z-[2] max-h-[500px] overflow-y-scroll border-zinc-300">
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map((suggestion,i) => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                    color: suggestion.active ? "#fff" : "#27272a",
                                };

                                return (
                                    <div className="px-5 py-2 border-zinc-300 border-t cursor-pointer " key={i} {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </>
    );
}