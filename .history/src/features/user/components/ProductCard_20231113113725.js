import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
let item2 = 'Rick Astley'
function ProductCard (data) {
    return(
        <TitleCard title={item2}>
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
