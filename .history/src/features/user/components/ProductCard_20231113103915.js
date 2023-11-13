import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
let item = 'Rick Astley'
function ProductCard ( ) {
    return(
        <TitleCard title={"Product Details for " + item}>
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
