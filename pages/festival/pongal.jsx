import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FetchAPI } from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import { convert_Date_to_redable } from "../../components/festival/festivalCard";
import { Decode } from "../../components/utils/decode";

export default function Pongal() {
  const [loader, setloader] = useState(false);
  const [moment, setMoment] = useState({});
  const [input, setinput] = useState("");
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    let mouted = true;
    if (mouted) {
      if (query.q) {
        const decode = Decode(query.q);
        console.log(decode);
        const parse = JSON.parse(decode);

        setinput(parse);
        Apicall(parse);
      }
      //router.push("/festival");
    }
    return () => {
      mouted = false;
    };
  }, []);

  const Apicall = async (input) => {
    setloader(true);
    const panchang = await FetchAPI("festival_muhurta", input);

    setMoment({ sankranti_moment: panchang.sankranti_moment });

    setloader(false);
  };

  return (
    <>
      {loader ? (
        <div className="mt-[100px]">
          <Loader />
        </div>
      ) : (
        <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
          <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
            <FestivalDetailCard festival_name="Pongal " date={"2022-11-19"} />
            <div className="relative border-2  border-sky-500 bg-white flex flex-col gap-8 pt-10 pb-5 px-5 md:p-10">
              <div className="absolute text-white px-5 py-2 p-[5px] font-bold top-[-15px] left-[20px] bg-sky-600">
                Thai Pongal Muhurta
              </div>
              <h6 className="text-center md:text-lg text-base ">
                Thai Pongal{" "}
                <span className="text-red-600 font-semibold">
                  on {convert_Date_to_redable(input.festival_date)}
                </span>
              </h6>
              {/* punya kaal */}
              <p className="md:text-2xl text-center text-xl text-yellow-600">
                Thai Pongal Sankranti Moment - {moment.sankranti_moment}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
