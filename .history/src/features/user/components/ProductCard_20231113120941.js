import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
//let item2 = 'Rick Astley'
function ProductCard (data, index) {
    console.log(JSON.stringify(data))
    if (data.data !== undefined) {
        return(
            <>
                <TitleCard title={data.data[index].title}>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12 zoom">
                                <img src={data.data[0].albumPhoto} alt="Album Art" />
                            </div>
                        </div>
                    </div>
                    <BarChart  />
                    <LineChart/>
                </TitleCard>
            </>
        )
    } else {
        return  (
                    <TitleCard title={"No Data"}>
                    </TitleCard>
        )
    }

}

export default ProductCard
