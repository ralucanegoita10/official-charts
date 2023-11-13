import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"

function ProductCard () {
    return(
        <TitleCard title={"Revenue (£GBP)"}>
              <BarChart  />
              <LineChart/>
        </TitleCard>
    
      )

}
