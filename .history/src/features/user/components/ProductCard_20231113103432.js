import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"

function ProductCard () {
    return(
        <TitleCard title={"Product Details"}>
            <BarChart  />
            <LineChart/>
        </TitleCard>
    )

}

export default ProductCard
