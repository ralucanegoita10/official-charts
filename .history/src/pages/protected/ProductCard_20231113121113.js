import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProductCard from '../../features/user/components/ProductCard'
import ChartData from '../../features/leads/chartData'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Product Card"}))
      }, [])


    return(
        <ProductCard info={ChartData} index={Math.floor(Math.random()*10)}/>
    )
}

export default InternalPage