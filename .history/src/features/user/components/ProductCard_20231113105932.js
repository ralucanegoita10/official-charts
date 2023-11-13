import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
let item2 = 'Rick Astley'
function ProductCard (item) {
    return(
        <TitleCard title={item}>
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
