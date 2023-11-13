import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"

function ProductCard (item = {title: 'Rick Astley'}) {
    return(
        <TitleCard title={"Product Details for " + item.title}>
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
