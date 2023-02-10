import './itemListContainer.scss'
import { ItemList } from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
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
                setTimeout (() => {
                    setLoading(false)
                }, 1000)
            })
        }, [categoryId])

    return (
        <div>
            {
                loading ? 
                <div class="loader">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                </div>
                : <ItemList products={products}/>
            }
        </div>
    )
}