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
   // const [styleList, setStyleList] = useState({})
    const [classList, setClassList] = useState('modal modal-top')

    // function handleCloseClick (){
    //     console.log('handling close click')
    //     let el = document.getElementById('cl-btn')
    //     el.click()
    //     console.log('el clicked')
    // }
    function handleToggle () {
        if (isOpen) {
            setIsOpen(false)
            //setStyleList({visibility:'hidden', opacity:0})
            setClassList('modal modal-top')
        } else {
            setIsOpen(true)
            //setStyleList({visibility:'visible', opacity:'unset'})
            setClassList('modal modal-top modal-open')
        }
        
    }


    return(
        <div>
            <div>
                <button className='btn' onClick={()=>{
                handleToggle()}}>Open Modal</button>
                <dialog id="my_modal_1" className={classList}>
                    <div className="modal-box">
                        <ProductCard data={ChartData} visible={true} index={Math.floor(Math.random()*10)} func={()=> console.log('nope')}/>
                        <p className="py-4">Press ESC key or click the button below to close</p> 
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button id='cl-btn' className="btn" onClick={handleToggle}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default InternalPage