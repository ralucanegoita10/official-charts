import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
//let item2 = 'Rick Astley'
function ProductCard ({data, index}) {
    console.log("info" + JSON.stringify(data))
    console.log(index)

    if (data !== undefined) {
        return(
            <>
                <TitleCard title={data[index].title}>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12 zoom">
                                <img src={data[index].albumPhoto} alt="Album Art" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-square w-40 h-40 zoom">
                                <img src={'https://brandongaille.com/wp-content/uploads/2014/02/Atlantic-Records-Company-Logo.png'} alt="Album Art" />
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
