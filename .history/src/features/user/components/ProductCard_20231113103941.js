import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
let item2 = 'Rick Astley'
function ProductCard (item = item2 ) {
    return(
        <TitleCard title={"Product Details for " + item}>
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
