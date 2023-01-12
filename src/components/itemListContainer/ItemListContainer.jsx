import './itemListContainer.scss'
import { ItemList } from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { DataRequest } from '../../helpers/dataRequest'

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
   
    useEffect(() => {
        DataRequest()
            .then((res) => {
                if (categoryId) {
                    setProducts( res.filter(prod => prod.category === categoryId) )
                } else {
                    setProducts(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])

    return (
        <div className=''>
        <ItemList products={products}/>
        </div>
    )
}