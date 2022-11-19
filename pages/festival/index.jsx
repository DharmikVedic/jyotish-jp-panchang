import React, {useCallback, useEffect, useState} from "react";
import FestivalFormdata from "../../components/festival/festivalFilter";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FeativalYearCard from "../../components/festival/festivalCard";
<<<<<<< HEAD

export default function Festival({festival}){
    const dateobj = new Date();
    const defaultobject = {
        lat: 35.6761919,
        lon: 139.6503106,
        timezone: 9,
        year: dateobj.getFullYear(),
    };
    const [input,setinput] = useState();
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState(festival);
    const [year,setyear] = useState(defaultobject);

    // useEffect(()=>{
    //     let mouted = true;
    //     if(mouted) {
    //       //Apicall(year);
    //     }
    //     return()=> {mouted = false};
    // },[]);


    const Apicall =async(passyear)=>{
        setloader(true);
        const yearlyFestival = await FetchAPI("yearly_festivals",{year:passyear});
        if(yearlyFestival.status) {
            let arr = [];
            const monthFilter = [...Array(12)].map((item, i) => {
                let obj = {};
                let filterArr = yearlyFestival.festivals.filter(val => val.month == i + 1);
=======
import {month} from "../../components/table/tableFilter";


const datas = [{"id":678,"year":2022,"month":10,"date":17,"festival":"Ahoi Ashtami","festival_key":"AHOI_ASHTAMI","region":"Common"},{"id":879,"year":2022,"month":8,"date":23,"festival":"Aja Paush_putrada_ekadashi","festival_key":"AJA_EKADASHI","region":"Common"},{"id":1482,"year":2022,"month":5,"date":3,"festival":"Akshaya Tritiya","festival_key":"AKSHAYA_TRITIYA","region":"Common"},{"id":1683,"year":2022,"month":3,"date":14,"festival":"Amalaki Paush_putrada_ekadashi","festival_key":"AMALAKI_EKADASHI","region":"Common"},{"id":2085,"year":2022,"month":9,"date":9,"festival":"Anant Chaturdashi","festival_key":"ANANT_CHATURDASHI","region":"Common"},{"id":2688,"year":2022,"month":5,"date":26,"festival":"Apara Paush_putrada_ekadashi","festival_key":"APARA_EKADASHI","region":"Common"},{"id":5943,"year":2022,"month":3,"date":25,"festival":"Basoda","festival_key":"BASODA","region":"Common"},{"id":6763,"year":2022,"month":3,"date":20,"festival":"Bhai Dooj","festival_key":"BHAI_DOOJ","region":"Common"},{"id":6964,"year":2022,"month":10,"date":26,"festival":"Bhaiya Dooj","festival_key":"BHAIYA_DOOJ","region":"Common"},{"id":7165,"year":2022,"month":2,"date":8,"festival":"Bhishma Ashtami","festival_key":"BHISHMA_ASHTAMI","region":"Common"},{"id":7969,"year":2022,"month":5,"date":16,"festival":"Buddha Purnima","festival_key":"BUDDHA_PURNIMA","region":"Common"},{"id":8578,"year":2022,"month":4,"date":2,"festival":"Chaitra Navratri","festival_key":"CHAITRA_NAVRATRI","region":"Common"},{"id":11832,"year":2022,"month":5,"date":16,"festival":"Chandra Grahan","festival_key":"CHANDRA_GRAHAN","region":"Common"},{"id":11833,"year":2022,"month":11,"date":8,"festival":"Chandra Grahan","festival_key":"CHANDRA_GRAHAN","region":"Common"},{"id":12533,"year":2022,"month":10,"date":30,"festival":"Chhath Puja","festival_key":"CHHATH_PUJA","region":""},{"id":12734,"year":2022,"month":3,"date":17,"festival":"Chhoti Holi","festival_key":"CHHOTI_HOLI","region":"Common"},{"id":13738,"year":2022,"month":12,"date":7,"festival":"Dattatreya Jayanti","festival_key":"DATTATREYA_JAYANTI","region":"Common"},{"id":14140,"year":2022,"month":7,"date":10,"festival":"Devshayani Paush_putrada_ekadashi","festival_key":"DEVSHAYANI_EKADASHI","region":"Common"},{"id":14341,"year":2022,"month":11,"date":4,"festival":"Devutthana Paush_putrada_ekadashi","festival_key":"DEVUTTHANA_EKADASHI","region":"Common"},{"id":14542,"year":2022,"month":10,"date":22,"festival":"Dhan Teras","festival_key":"DHANTERAS","region":"Common"},{"id":14743,"year":2022,"month":12,"date":16,"festival":"Dhanu Sankranti","festival_key":"DHANU_SANKRANTI","region":"Common"},{"id":14944,"year":2022,"month":10,"date":24,"festival":"Diwali","festival_key":"DIWALI","region":"Common"},{"id":15145,"year":2022,"month":10,"date":3,"festival":"Durga Ashtami","festival_key":"DURGA_ASHTAMI","region":"Common"},{"id":15949,"year":2022,"month":10,"date":5,"festival":"Dussehra","festival_key":"DUSSEHRA","region":"Common"},{"id":17764,"year":2022,"month":8,"date":31,"festival":"Ganesh Chaturthi","festival_key":"GANESH_CHATURTHI","region":"Common"},{"id":17965,"year":2022,"month":9,"date":9,"festival":"Ganesh Visarjan","festival_key":"GANESH_VISARJAN","region":"Common"},{"id":18769,"year":2022,"month":4,"date":4,"festival":"Gangaur","festival_key":"GANGAUR","region":"Common"},{"id":19745,"year":2022,"month":4,"date":4,"festival":"Gauri Puja","festival_key":"GAURI_PUJA","region":"Common"},{"id":19746,"year":2022,"month":9,"date":4,"festival":"Gauri Puja","festival_key":"GAURI_PUJA","region":"Common"},{"id":20950,"year":2022,"month":8,"date":12,"festival":"Gayatri Jayanti","festival_key":"GAYATRI_JAYANTI","region":"Common"},{"id":20951,"year":2022,"month":6,"date":11,"festival":"Gayatri Jayanti","festival_key":"GAYATRI_JAYANTI","region":"Common"},{"id":21230,"year":2022,"month":9,"date":26,"festival":"Ghatasthapana","festival_key":"GHATASTHAPANA","region":""},{"id":21430,"year":2022,"month":12,"date":3,"festival":"Gita Jayanti","festival_key":"GITA_JAYANTI","region":"Common"},{"id":22033,"year":2022,"month":10,"date":21,"festival":"Govatsa Dwadashi","festival_key":"GOVATSA_DWADASHI","region":"Common"},{"id":22234,"year":2022,"month":10,"date":26,"festival":"Gowardhan Puja","festival_key":"GOWARDHAN_PUJA","region":"Common"},{"id":22636,"year":2022,"month":4,"date":2,"festival":"Gudi Padwa","festival_key":"GUDI_PADWA","region":"Marathi"},{"id":23641,"year":2022,"month":7,"date":13,"festival":"Guru Purnima","festival_key":"GURU_PURNIMA","region":"Common"},{"id":24228,"year":2022,"month":4,"date":16,"festival":"Hanuman Jayanti","festival_key":"HANUMAN_JAYANTI","region":"Common"},{"id":25433,"year":2022,"month":7,"date":31,"festival":"Hariyali Teej","festival_key":"HARIYALI_TEEJ","region":""},{"id":25634,"year":2022,"month":8,"date":30,"festival":"Hartalika Teej","festival_key":"HARTALIKA_TEEJ","region":""},{"id":26036,"year":2022,"month":3,"date":18,"festival":"Holi","festival_key":"HOLI","region":"Common"},{"id":26237,"year":2022,"month":3,"date":17,"festival":"Holika Dahan","festival_key":"HOLIKA_DAHAN","region":"Common"},{"id":26639,"year":2022,"month":9,"date":21,"festival":"Indira Paush_putrada_ekadashi","festival_key":"INDIRA_EKADASHI","region":"Common"},{"id":26840,"year":2022,"month":11,"date":2,"festival":"Jagaddhatri Puja","festival_key":"JAGADDHATRI_PUJA","region":"Common"},{"id":27041,"year":2022,"month":7,"date":1,"festival":"Jagannath Rathyatra","festival_key":"JAGANNATH_RATHYATRA","region":"Odisha"},{"id":27242,"year":2022,"month":2,"date":24,"festival":"Janaki Jayanti","festival_key":"JANAKI_JAYANTI","region":"Common"},{"id":27389,"year":2022,"month":8,"date":19,"festival":"Janmashtami *ISKCON","festival_key":"JANMASHTAMI","region":"Common"},{"id":27497,"year":2022,"month":8,"date":18,"festival":"Janmashtami *Smarta","festival_key":"JANMASHTAMI","region":"Common"},{"id":27658,"year":2022,"month":2,"date":12,"festival":"Jaya Paush_putrada_ekadashi","festival_key":"JAYA_EKADASHI","region":"Common"},{"id":29294,"year":2022,"month":8,"date":14,"festival":"Kajari Teej","festival_key":"KAJARI_TEEJ","region":""},{"id":29495,"year":2022,"month":11,"date":16,"festival":"Kalabhairav Jayanti","festival_key":"KALABHAIRAV_JAYANTI","region":"Common"},{"id":31981,"year":2022,"month":10,"date":23,"festival":"Kali Chaudas","festival_key":"KALI_CHAUDAS","region":"Common"},{"id":32785,"year":2022,"month":4,"date":12,"festival":"Kamada Paush_putrada_ekadashi","festival_key":"KAMADA_EKADASHI","region":"Common"},{"id":32986,"year":2022,"month":7,"date":24,"festival":"Kamika Paush_putrada_ekadashi","festival_key":"KAMIKA_EKADASHI","region":"Common"},{"id":33187,"year":2022,"month":11,"date":3,"festival":"Kansa Vadh","festival_key":"KANSA_VADH","region":"Common"},{"id":33388,"year":2022,"month":9,"date":17,"festival":"Kanya Sankranti","festival_key":"KANYA_SANKRANTI","region":"Common"},{"id":33790,"year":2022,"month":7,"date":16,"festival":"Karka Sankranti","festival_key":"KARKA_SANKRANTI","region":"Common"},{"id":34539,"year":2022,"month":10,"date":13,"festival":"Karwa Chauth","festival_key":"KARWA_CHAUTH","region":""},{"id":35436,"year":2022,"month":2,"date":13,"festival":"Kumbha Sankranti","festival_key":"KUMBHA_SANKRANTI","region":""},{"id":36441,"year":2022,"month":10,"date":24,"festival":"Lakshmi Puja","festival_key":"LAKSHMI_PUJA","region":"Common"},{"id":38428,"year":2022,"month":10,"date":4,"festival":"Maha Navami","festival_key":"MAHA_NAVAMI","region":"Common"},{"id":38629,"year":2022,"month":3,"date":1,"festival":"Maha Shivaratri","festival_key":"MAHA_SHIVRATRI","region":"Common"},{"id":39835,"year":2022,"month":1,"date":14,"festival":"Makar Sankranti","festival_key":"MAKAR_SANKRANTI","region":"Common"},{"id":48111,"year":2022,"month":2,"date":1,"festival":"Mauni Amavas","festival_key":"MAUNI_AMAVAS","region":"Common"},{"id":48312,"year":2022,"month":3,"date":14,"festival":"Meena Sankranti","festival_key":"MEENA_SANKRANTI","region":"Common"},{"id":48915,"year":2022,"month":4,"date":14,"festival":"Mesha Sankranti","festival_key":"MESHA_SANKRANTI","region":"Common"},{"id":49116,"year":2022,"month":6,"date":15,"festival":"Mithuna Sankranti","festival_key":"MITHUNA_SANKRANTI","region":"Common"},{"id":49317,"year":2022,"month":5,"date":12,"festival":"Mohini Paush_putrada_ekadashi","festival_key":"MOHINI_EKADASHI","region":"Common"},{"id":49517,"year":2022,"month":12,"date":3,"festival":"Mokshada Paush_putrada_ekadashi","festival_key":"MOKSHADA_EKADASHI","region":"Common"},{"id":50120,"year":2022,"month":8,"date":2,"festival":"Nag Panchami","festival_key":"NAG_PANCHAMI","region":"Common"},{"id":50723,"year":2022,"month":10,"date":24,"festival":"Narak Chaturdashi","festival_key":"NARAK_CHATURDASHI","region":"Common"},{"id":50924,"year":2022,"month":8,"date":12,"festival":"Narali Purnima","festival_key":"NARALI_PURNIMA","region":"Common"},{"id":51125,"year":2022,"month":5,"date":14,"festival":"Narasimha Jayanti","festival_key":"NARASIMHA_JAYANTI","region":"Common"},{"id":51929,"year":2022,"month":9,"date":26,"festival":"Navratri Begins","festival_key":"NAVRATRI_BEGINS","region":"Common"},{"id":52331,"year":2022,"month":6,"date":10,"festival":"Nirjala Paush_putrada_ekadashi","festival_key":"NIRJALA_EKADASHI","region":"Common"},{"id":52532,"year":2022,"month":9,"date":8,"festival":"Onam","festival_key":"ONAM","region":"Malayalam"},{"id":53211,"year":2022,"month":10,"date":6,"festival":"Papankusha Paush_putrada_ekadashi","festival_key":"PAPANKUSHA_EKADASHI","region":"Common"},{"id":53412,"year":2022,"month":3,"date":28,"festival":"Papmochani Paush_putrada_ekadashi","festival_key":"PAPMOCHANI_EKADASHI","region":"Common"},{"id":53689,"year":2022,"month":5,"date":3,"festival":"Parashurama Jayanti","festival_key":"PARASHURAMA_JAYANTI","region":"Common"},{"id":53890,"year":2022,"month":9,"date":6,"festival":"Parsva Paush_putrada_ekadashi","festival_key":"PARSVA_EKADASHI","region":"Common"},{"id":54292,"year":2022,"month":1,"date":17,"festival":"Paush Purnima","festival_key":"PAUSH_PURNIMA","region":"Common"},{"id":54493,"year":2022,"month":1,"date":13,"festival":"Pausha Putrada Paush_putrada_ekadashi","festival_key":"PAUSHA_PUTRADA_EKADASHI","region":"Common"},{"id":55503,"year":2022,"month":1,"date":14,"festival":"Pongal","festival_key":"PONGAL","region":"Tamil"},{"id":64368,"year":2022,"month":8,"date":11,"festival":"Rakhi","festival_key":"RAKHI","region":"Common"},{"id":64569,"year":2022,"month":8,"date":11,"festival":"Raksha Bandhan","festival_key":"RAKSHA_BANDHAN","region":"Common"},{"id":64770,"year":2022,"month":10,"date":21,"festival":"Rama Paush_putrada_ekadashi","festival_key":"RAMA_EKADASHI","region":"Common"},{"id":64965,"year":2022,"month":4,"date":10,"festival":"Rama Navami","festival_key":"RAMA_NAVAMI","region":"Common"},{"id":66592,"year":2022,"month":9,"date":1,"festival":"Rishi Panchami","festival_key":"RISHI_PANCHAMI","region":"Common"},{"id":69486,"year":2022,"month":1,"date":21,"festival":"Sakat Chauth","festival_key":"SAKAT_CHAUTH","region":"Common"},{"id":72969,"year":2022,"month":12,"date":19,"festival":"Saphala Paush_putrada_ekadashi","festival_key":"SAPHALA_EKADASHI","region":"Common"},{"id":73371,"year":2022,"month":10,"date":2,"festival":"Saraswati Avahan","festival_key":"SARASWATI_AVAHAN","region":"Common"},{"id":73970,"year":2022,"month":10,"date":3,"festival":"Saraswati Puja","festival_key":"SARASWATI_PUJA","region":"Common"},{"id":75376,"year":2022,"month":5,"date":30,"festival":"Shani Jayanti","festival_key":"SHANI_JAYANTI","region":"Common"},{"id":76483,"year":2022,"month":10,"date":9,"festival":"Sharad Purnima","festival_key":"SHARAD_PURNIMA","region":"Common"},{"id":77086,"year":2022,"month":1,"date":28,"festival":"Shattila Paush_putrada_ekadashi","festival_key":"SHATTILA_EKADASHI","region":"Common"},{"id":77287,"year":2022,"month":3,"date":25,"festival":"Sheetala Ashtami","festival_key":"SHEETALA_ASHATAMI","region":"Common"},{"id":79576,"year":2022,"month":8,"date":8,"festival":"Shravana Putrada Paush_putrada_ekadashi","festival_key":"SHRAVANA_PUTRADA_EKADASHI","region":"Common"},{"id":79777,"year":2022,"month":8,"date":17,"festival":"Simha Sankranti","festival_key":"SIMHA_SANKRANTI","region":"Common"},{"id":79978,"year":2022,"month":5,"date":10,"festival":"Sita Navami","festival_key":"SITA_NAVAMI","region":"Common"},{"id":82264,"year":2022,"month":4,"date":14,"festival":"Solar New Year","festival_key":"SOLAR_NEW_YEAR","region":"Common"},{"id":85746,"year":2022,"month":10,"date":17,"festival":"Tula Sankranti","festival_key":"TULA_SANKRANTI","region":"Common"},{"id":85947,"year":2022,"month":11,"date":5,"festival":"Tulasi Vivah","festival_key":"TULASI_VIVAH","region":"Common"},{"id":86349,"year":2022,"month":4,"date":2,"festival":"Ugadi","festival_key":"UGADI","region":"Telugu"},{"id":86550,"year":2022,"month":11,"date":20,"festival":"Utpanna Paush_putrada_ekadashi","festival_key":"UTPANNA_EKADASHI","region":"Common"},{"id":87140,"year":2022,"month":1,"date":13,"festival":"Vaikuntha Paush_putrada_ekadashi","festival_key":"VAIKUNTHA_EKADASHI","region":"Common"},{"id":89341,"year":2022,"month":8,"date":12,"festival":"Varalakshmi Vrat","festival_key":"VARALAKSHAMI_VRAT","region":"Common"},{"id":89542,"year":2022,"month":4,"date":26,"festival":"Varuthini Paush_putrada_ekadashi","festival_key":"VARUTHINI_EKADASHI","region":"Tamil"},{"id":89743,"year":2022,"month":2,"date":5,"festival":"Vasant Panchami","festival_key":"VASANT_PANCHAMI","region":"Common"},{"id":89944,"year":2022,"month":3,"date":18,"festival":"Vasanta Purnima","festival_key":"VASANTA_PURNIMA","region":"Common"},{"id":90145,"year":2022,"month":6,"date":14,"festival":"Vat Purnima Vrat","festival_key":"VAT_PURNIMA_VRAT","region":"Common"},{"id":90346,"year":2022,"month":5,"date":30,"festival":"Vat Savitri Vrat","festival_key":"VAT_SAVITRI_VRAT","region":"Common"},{"id":91149,"year":2022,"month":10,"date":5,"festival":"Vijayadashami","festival_key":"VIJAYADASHAMI","region":"Common"},{"id":93836,"year":2022,"month":9,"date":17,"festival":"Vishwakarma Puja","festival_key":"VISHWAKARMA_PUJA","region":""},{"id":94237,"year":2022,"month":11,"date":16,"festival":"Vrischika Sankranti","festival_key":"VRISCHIKA_SANKRANTI","region":"Common"},{"id":94438,"year":2022,"month":5,"date":15,"festival":"Vrishabha Sankranti","festival_key":"VRISHABHA_SANKRANTI","region":"Common"},{"id":95442,"year":2022,"month":4,"date":7,"festival":"Yamuna Chhath","festival_key":"YAMUNA_CHHATH","region":""},{"id":95844,"year":2022,"month":6,"date":24,"festival":"Yogini Paush_putrada_ekadashi","festival_key":"YOGINI_EKADASHI","region":"Common"}]




export default function Festival(){
    const dateobj = new Date();
    const defaultobject = {
        country: "japan",
        day: dateobj.getDate(),
        hour: dateobj.getHours(),
        lat: 35.6761919,
        lon: 139.6503106,
        min: dateobj.getMinutes(),
        month: dateobj.getMonth()+1,
        tzone: 9,
        year: dateobj.getFullYear(),
    };
    const [loader,setloader] = useState(false);
    const [input, setinput] = useState(defaultobject);
    const [data,setdata] = useState([]);
    const [year,setyear] = useState(dateobj.getFullYear());

    useEffect(()=>{
        let mouted = true;
        if(mouted) {
            let arr = [];
            const monthFilter = [...Array(12)].map((item, i) => {
                let obj = {};
                let filterArr = datas.filter(val => val.month == i + 1);
>>>>>>> origin/new-branch
                obj[i + 1] = filterArr
                arr.push(filterArr);
            });
            setdata(arr);
<<<<<<< HEAD
            setloader(false);
        }
=======
        }
        return()=> {mouted = false};
    },[]);


    const Apicall =async(input)=>{
        setloader(true);
        const panchang = await FetchAPI("advanced_panchang",input);
        const tamil_panchang = await FetchAPI("tamil_panchang",input);
        setdata({panchang:panchang,tamil:tamil_panchang});
>>>>>>> origin/new-branch
        setloader(false);
    }



    const getdata = useCallback(async (datestring, res)=>{
<<<<<<< HEAD
        //setinput(prev => ({...prev, ...res }));
        setyear(res)
        await Apicall(res.year);
=======
        setinput(prev => ({...prev, ...res }));
        setyear(datestring)
        //Apicall({...input,...res,...tzoneval});
>>>>>>> origin/new-branch
    },[]);



<<<<<<< HEAD
    return(
        <div>
        <FestivalFormdata getinput={getdata} />
            {loader || data.length <= 0 ?
=======


    return(
        <div>
<FestivalFormdata getinput={getdata} />
            {loader  ?
>>>>>>> origin/new-branch
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 pt-10 pb-20 min-h-screen">
                <div className="max-w-4xl flex flex-col gap-5 mx-auto px-5">
<<<<<<< HEAD
                    {data?.map((item,i)=>{
                        return(
                            <FeativalYearCard year={year} festival={item} monthName={mL[i]} key={i}/>
=======
                    {data.map((item,i)=>{
                        return(
                            <FeativalYearCard year={2022} festival={item} monthName={mL[i]} key={i}/>
>>>>>>> origin/new-branch
                        )
                    }
                    )}
                </div>
                </div>
            }
        </div>
    )
}


<<<<<<< HEAD
export async function getStaticProps(context) {
    const dateobj = new Date();
    const year = dateobj.getFullYear();

    // Festival at build time
    const Apicall =async(year)=>{
        const yearlyFestival = await FetchAPI("yearly_festivals",{year:year});
        if(yearlyFestival.status) {
            let arr = [];
            const monthFilter = [...Array(12)].map((item, i) => {
                let obj = {};
                let filterArr = yearlyFestival.festivals.filter(val => val.month == i + 1);
                obj[i + 1] = filterArr
                arr.push(filterArr);
            });
            return arr;

        }
    }

    const getFestival = await Apicall(year);
    return {
        props: {
            festival:getFestival
        },
    }
}





export const weekDay =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const hindiWeekDay = ['रबिवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
=======
>>>>>>> origin/new-branch
export const  mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
