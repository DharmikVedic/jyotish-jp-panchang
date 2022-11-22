import React, {useEffect, useRef, useState} from "react";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import {country} from "../json/country";

const api = "https://geo.vedicrishi.in/places";

export default function Sample(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(props.defaultSelected);
  const [error, seterror] = useState("");
  const [state,setState] = useState([{name:""}]);
  const typeahead = useRef(null);
  const [selectedcountry, setcountry] = useState("India");

  const handleSearch = (query) => {
    setIsLoading(true);
    fetch(api, {
      method: "POST",
      headers: {
        Authorization:
          "Basic NjAxMjgwOjgxNjAwODk5YzkzOTA4N2Q5YTFjMjYxMDhkZjg2Mzk5",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country: selectedcountry, name: query }),
    })
      .then((res) => res.json())
      .then((item) => {
        if (Array.isArray(item)) {
          const options = item.map((item) => ({
            country: item.country,
            lat: item.latitude,
            lon: item.longitude,
            name: item.place,
            id: item.place,
          }));
          setOptions(options);
          setIsLoading(false);
        } else {
          seterror("no match found");
        }
      });
  };

  const handdleChange = (input) => {
    props.passdata(input[0]);
  };
  const handlecountry = (e) => {
    const { value } = e.target;
    setcountry(value);
  }
  useEffect(() => {
    if(props.clear){
      typeahead.current.clear();
    }
  },[props.clear]);
  const filterBy = () => true;
  return (
    <div className="w-full flex rounded border border-zinc-300 divide-x flex-grow bg-white flex-row  ">
      <div className="w-[30%]">
        <select
          onChange={handlecountry}
          name="country"
          defaultValue={selectedcountry}
          className="w-full bg-zinc-100 px-2 py-[6.5px]  text-gray-600  focus:outline-none"
        >
          {country.map((item, i) => (
            <option
              value={item.country_name}
              key={i}
            >
              {item.country_name}
            </option>
          ))}
        </select>
      </div>
      <div className=" w-full px-2">
        <div className="flex-grow w-full">
        <AsyncTypeahead
            ref={typeahead}
          filterBy={filterBy}
          id="async-user"
          isLoading={Boolean(isLoading)}
          labelKey="name"
          minLength={3}
          defaultSelected={props.selected}
          onChange={handdleChange}
          onSearch={handleSearch}
          options={options}
          placeholder="Type Birth City/District"
          renderMenuItemChildren={(option, props) => (
            <div className="bg-white  w-full border-b border-zinc-300">
              <p className="flex text-zinc-800 text-sm cursor-pointer py-2.5 px-2  gap-x-2 items-center hover:bg-sky-500 hover:text-white">
                <span>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     className="w-5 h-5 fill-current" viewBox="0 0 64.000000 64.000000"
                     preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                     fill="current" stroke="none">
                    <path d="M225 616 c-89 -42 -138 -116 -138 -211 0 -67 15 -99 123 -264 62 -95
98 -141 110 -141 12 0 48 46 110 141 108 165 123 197 123 264 0 95 -49 169
-138 211 -65 31 -125 31 -190 0z m180 -25 c52 -23 101 -80 116 -133 19 -71 -3
-132 -106 -290 -50 -76 -92 -138 -95 -138 -3 0 -45 62 -95 138 -103 158 -125
219 -106 290 33 119 173 185 286 133z"/>
                    <path d="M263 510 c-40 -24 -64 -60 -65 -99 -3 -101 102 -164 187 -111 55 34
74 114 40 166 -21 32 -73 64 -105 64 -14 0 -39 -9 -57 -20z m111 -31 c38 -30
49 -64 36 -105 -29 -85 -151 -85 -180 0 -13 41 -2 75 36 105 15 11 39 21 54
21 15 0 39 -10 54 -21z"/>
                  </g>
                </svg>
                   </span>
                {option.name}
              </p>
            </div>
          )}
        />
      </div>
      </div>
    </div>
  );
}


