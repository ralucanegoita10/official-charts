import TitleCard from "../../../components/Cards/TitleCard"
import BarChart from "../../dashboard/components/BarChart"
import LineChart from "../../dashboard/components/LineChart"
//let item2 = 'Rick Astley'
function ProductCard ({data, index}) {
    console.log("info = " + JSON.stringify(data))
    console.log('index = '+ index)

    if (data !== undefined) {
        return(
            <>  
            <div>
                <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
                </div>
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
