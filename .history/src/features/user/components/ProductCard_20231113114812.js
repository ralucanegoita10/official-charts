import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
let item2 = 'Rick Astley'
function ProductCard (data, index = 0) {
    console.log(index)
    console.log(JSON.stringify(data))
    return(
        <TitleCard title={data.data[0].title}>
            {/* <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24 zoom">
                          <img src={data.data[0].albumPhoto} alt="Album Art" />
                        </div>
                      </div>
                    </div> */}
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
