import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProductCard from '../../features/user/components/ProductCard'
import ChartData from '../../features/leads/chartData'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Product Card"}))
      }, [])
    const [isOpen, setIsOpen] = useState(false)
    const [classList, setClassList] = useState('')
    function handleToggle () {
        setIsOpen(!isOpen)
    }


    return(
        <div>
            <div>
            <button className="btn" onClick={()=>{
                document.getElementById('my_modal_1').showModal()
                handleToggle()
            }}>open modal</button>
<dialog id="my_modal_1" className="modal modal-top">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
            <ProductCard data={ChartData} visible={true} index={Math.floor(Math.random()*10)} func={()=> console.log('nope')}/>
    <p className="py-4">Press ESC key or click the button below to close</p> 
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" onClick={handleToggle}>Close</button>
      </form>
    </div>
  </div>
</dialog>
            </div>
        </div>
    )
}

export default InternalPage