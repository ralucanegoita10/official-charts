import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
let item2 = 'Rick Astley'
function ProductCard (data, index = 0) {
    console.log(index)
    console.log(JSON.stringify(data))
    return(
        <TitleCard title={data.data[index].title}>
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
