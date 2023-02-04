import './itemListContainer.scss'
import { ItemList } from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs, limit, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
   
    useEffect(() => {
        setLoading (true)
        const productsRef = collection(db, "Products")
        const q = categoryId ? query(productsRef, where("category", "==", categoryId) ) : productsRef
        getDocs(q)
            .then((resp) => {
                setProducts( resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])

    return (
        <div>
            {
                loading ? <div className='div__loading'><h1 className='div__loading__h1'>Loading...</h1></div> : <ItemList products={products}/>
            }
        </div>
    )
}