import Link from "next/link";

export default function Footer(){
    const links =[
        {
            name:"ホーム",
            link:"https://jyotish.jp/"
        },
        {
            name:"ログイン",
            link:"https://jyotish.jp/sign-in"
        },
        {
            name:"無料登録",
            link:"https://jyotish.jp/sign-up"
        },
        {
            name:"利用規約",
            link:"https://jyotish.jp/terms"
        },
        {
            name:"プライバシーポリシー",
            link:"https://jyotish.jp/policy"
        },
        {
            name:"お問い合わせ",
            link:"https://jyotish.jp/contact"
        }
    ]

    const links2 =[
        {
            name:"インド占星術",
            link:"https://jyotish.jp/"
        },
        {
            name:"相性診断",
            link:"https://jyotish.jp/sign-in"
        },
        {
            name:"ラール・キターブ",
            link:"https://jyotish.jp/sign-up"
        },
        {
            name:"パンチャーンガ",
            link:"https://jyotish.jp/terms"
        },
        {
            name:"パンチャーンガ",
            link:"https://jyotish.jp/policy"
        }
    ]





    return(
        <div className="bg-[url('/imgs/footer-bg.jpeg')] bg-no-repeat bg-cover py-10">
<div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10  mx-auto px-5 ">
<div className="flex flex-col gap-4">
    <h6 className="text-white font-semibold">
        Menu
    </h6>
    <div className="flex flex-col gap-1">
        {links.map((item,i)=>(
            <div key={i}>
            <Link href={item.link}>
                <a className="text-zinc-400 md:text-base text-sm hover:text-white">
                    {item.name}
                </a>
            </Link>
            </div>
        ))}
    </div>
</div>

    <div className="flex flex-col gap-4">
        <h6 className="text-white font-semibold">
            FEATURES
        </h6>
        <div className="flex flex-col gap-1">
            {links2.map((item,i)=>(
                <div key={i}>
                    <Link href={item.link}>
                        <a className="text-zinc-400 md:text-base text-sm hover:text-white">
                            {item.name}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    </div>

    <div className="flex flex-col gap-4">
        <h6 className="text-white font-semibold">
            ABOUT
        </h6>
        <p className="text-zinc-400 md:text-base text-sm">
            インド占星術は、私たちが知ることのできない人生のあらゆる側面を照らし出します。Jyotish.jpを通じて、本格的なインド占星術を、日常生活に取り入れ、より充実した人生を過ごしましょう。
        </p>
    </div>

    <div className="flex flex-col gap-4">
        <h6 className="text-white font-semibold">
            FOLLOW US
        </h6>
        <div className="flex gap-3 items-center">
            <a href="#" className=" my-auto rounded-full  border-zinc-300 text-zinc-500">
                <svg className="fill-current duration-[150ms] ease-in rounded-full hover:fill-white hover:bg-sky-500 hover:border-transparent   border border-zinc-400 p-3.5 w-12 h-12" enableBackground="new 0 0 56.693 56.693"  id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" ><path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"/></svg>
            </a>
            <a href="#" className=" my-auto rounded-full  border-zinc-300 text-zinc-500">
                <svg className="fill-current rounded-full duration-[150ms] ease-in hover:fill-white hover:bg-blue-500 hover:border-transparent   border border-zinc-400 p-3 w-12 h-12" enableBackground="new 0 0 56.693 56.693"  id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" ><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"/></svg>

            </a>
            <a href="#" className=" my-auto rounded-full  border-zinc-300 text-zinc-500">
                <svg className="fill-current rounded-full duration-[150ms] ease-in hover:fill-white hover:bg-red-500 hover:border-transparent   border border-zinc-400 p-3 w-12 h-12" enableBackground="new 0 0 56.693 56.693"  id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" ><g><path d="M28.348,5.158c-13.599,0-24.625,11.023-24.625,24.625c0,10.082,6.063,18.744,14.739,22.553   c-0.069-1.721-0.012-3.783,0.429-5.654c0.473-2,3.168-13.418,3.168-13.418s-0.787-1.572-0.787-3.896   c0-3.648,2.115-6.373,4.749-6.373c2.24,0,3.322,1.682,3.322,3.695c0,2.252-1.437,5.619-2.175,8.738   c-0.616,2.613,1.31,4.744,3.887,4.744c4.665,0,7.808-5.992,7.808-13.092c0-5.397-3.635-9.437-10.246-9.437   c-7.47,0-12.123,5.57-12.123,11.792c0,2.146,0.633,3.658,1.624,4.83c0.455,0.537,0.519,0.754,0.354,1.371   c-0.118,0.453-0.389,1.545-0.501,1.977c-0.164,0.625-0.669,0.848-1.233,0.617c-3.44-1.404-5.043-5.172-5.043-9.408   c0-6.994,5.899-15.382,17.599-15.382c9.4,0,15.588,6.804,15.588,14.107c0,9.658-5.369,16.875-13.285,16.875   c-2.659,0-5.16-1.438-6.016-3.068c0,0-1.43,5.674-1.732,6.768c-0.522,1.9-1.545,3.797-2.479,5.275   c2.215,0.654,4.554,1.01,6.979,1.01c13.598,0,24.623-11.023,24.623-24.623C52.971,16.181,41.945,5.158,28.348,5.158z"/></g></svg>
            </a>
        </div>
    </div>

</div>
            <div className="flex max-w-6xl mx-auto mt-10 text-xs justify-between items-center text-zinc-400 px-5">
                <p>
                    Copyright (©) 2007-2021
                </p>
                <p>
                    SitaRama Co., Ltd. All right reserved
                </p>
            </div>
        </div>
    )
}