import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FetchAPI } from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard, {
  DetailPanchami,
} from "../../components/festival/festivalDetailCard";
import { convert_Date_to_redable } from "../../components/festival/festivalCard";
import { Decode } from "../../components/utils/decode";

export default function VasantPanchami() {
  const [loader, setloader] = useState(false);
  const [arr, setArr] = useState([]);
  const [tithistart, setTithiStart] = useState();
  const [tithiend, setTithiEnd] = useState();
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
    console.log(panchang);
    setArr([
      {
        start_time: panchang.vasant_panchami_muhurta.start_time,
        end_time: panchang.vasant_panchami_muhurta.end_time,
      },
    ]);

    setTithiStart(panchang.tithi_start);
    setTithiEnd(panchang.tithi_end);
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
          <div className="max-w-[750px]  mx-auto flex flex-col gap-14">
            <FestivalDetailCard
              festival_name="Vasanta Panchami"
              date={input.festival_date}
            />
            <DetailPanchami
              festival_date={input.festival_date}
              muhurat={arr}
              duration={"00 Hours 00 Mins"}
              tithistart={tithistart}
              tithiend={tithiend}
              name="Vasanta Panchami"
            />
          </div>
        </div>
      )}
    </>
  );
}
