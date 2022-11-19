export default function ChartButton({activeChart,passChart}) {

    const handlechart =(e)=>{
        const {value} = e.target;
        passChart(value);
    }

return (
    <div className="flex gap-5 items-center">
        <p className="text-lg text-gray-700 font-cera_bold mb-3">Chart type</p>
        <div className="flex gap-2" onChange={handlechart}>
            <div className="w-14 h-14 relative">
                <input
                    type="radio"
                    name="chart"
                    value="north"
                    defaultChecked={true}
                    className="chart cursor-pointer"
                />
                <label
                    className={`${activeChart === "north" ? "" : "gray"} pdf-north-chart graychart`}/>
            </div>
            <div className="w-14 h-14 relative ">
                <input
                    type="radio"
                    name="chart"
                    value="south"
                    className="chart cursor-pointer"

                />
                <label
                    className={`${activeChart === "south"  ? "" : "gray"} pdf-south-chart graychart`}/>
            </div>
            <div className="w-14 h-14 relative">
                <input
                    type="radio"
                    name="chart"
                    value="east"
                    className="chart cursor-pointer"
                />
                <label
                    className={`${activeChart === "east"  ? "" : "gray"} pdf-east-chart graychart`}/>
            </div>
        </div>
    </div>
)
}