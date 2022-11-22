import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FetchAPI } from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard from "../../components/festival/festivalDetailCard";
import { MuhutatDate } from "../../components/festival/utilsComponents";
import { Decode } from "../../components/utils/decode";

export default function Gangur() {
    const [loader, setloader] = useState(false);
    const [tithi, setTithi] = useState({});
    const [input, setinput] = useState("");
    const router = useRouter();
    const query = router.query;

    useEffect(() => {
        let mouted = true;
        if (mouted) {
            if (query.q) {
                const decode = Decode(query.q);
                const parse = JSON.parse(decode);
                setinput(parse);
                Apicall(parse);
            }
            //router.push("/festival");
        }
        return () => {
            mouted = false;
        };
    }, [query]);

    const Apicall = async (input) => {
        setloader(true);
        const panchang = await FetchAPI("festival_muhurta", input);
        setTithi({
            tithi_id: 3,
            tithi_start_time: panchang.tithi_start,
            tithi_end_time: panchang.tithi_end,
        });

        setloader(false);
    };

    return (
        <>
            {loader ||input==""? (
                <div className="mt-[100px]">
                    <Loader />
                </div>
            ) : (
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-20">
                        <FestivalDetailCard
                            festival_name="Gangur"
                            date={input.festival_date}
                        />
                        <MuhutatDate
                            festival_date={input.festival_date}
                            tithi={tithi}
                            name="Gangur "
                        />
                    </div>
                </div>
            )}
        </>
    );
}