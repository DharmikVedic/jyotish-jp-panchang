import React, {useCallback, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { FetchAPI } from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FestivalDetailCard, {
    DetailPanchami,
} from "../../components/festival/festivalDetailCard";
import { Decode } from "../../components/utils/decode";
import FestivalFormdata from "../../components/festival/festivalFilter";

export default function VasantPanchami() {
    const [loader, setloader] = useState(false);
    const [tithi, setTithi] = useState(null);
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
        setTithi([
            {
                start_time: panchang.vasant_panchami_muhurta.start_time,
                end_time: panchang.vasant_panchami_muhurta.end_time,
            },
        ]);
        setloader(false);
    };

    const getdata = useCallback(async (datestring, res)=>{
        const windowquery = new URLSearchParams(window.location.search);
        const decode = Decode(windowquery.get('q'));
        const parse = JSON.parse(decode);
        setinput(prev=> ({...prev,...parse,...res}))
        await Apicall({...parse,...res,festival_date:""});
    },[]);



    return (
        <>
            <FestivalFormdata getinput={getdata} />

            {loader || input=="" ? (
                <div className="mt-[100px]">
                    <Loader />
                </div>
            ) : (
                <div className="bg-zinc-100 min-h-screen pt-10 pb-28 px-5">
                    <div className="max-w-[750px]  mx-auto flex flex-col gap-14">
                        <FestivalDetailCard
                            festival_name="Vasanta Panchami"
                            date={tithi?.festival_date}
                        />
                        <DetailPanchami
                            festival_date={tithi?.festival_date}
                            muhurat={tithi}
                            duration={"00 Hours 00 Mins"}
                            tithistart={tithi[0].start_time}
                            tithiend={tithi[0].end_time}
                            name="Vasanta Panchami"
                        />
                    </div>
                </div>
            )}
        </>
    );
}