import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"

function ProductCard ({data, index, visible}) {

    if (data !== undefined) {
   
        return(
            visible && 
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
                            <div className=" w-60 h-40">
                                <img src={'https://brandongaille.com/wp-content/uploads/2014/02/Atlantic-Records-Company-Logo.png'} alt="Album Art" />
                            </div>
                        </div>
                    </div>
                    <BarChart  />
                    <LineChart title={data[index].title}/>
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
