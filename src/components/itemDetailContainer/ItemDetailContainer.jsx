import { ItemDetail } from "../itemDetail/ItemDetail";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import "./ItemDetailContainer.scss"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        // ref
        const docRef = doc(db, "Products", itemId)
       // peticion async
        getDoc(docRef)
            .then(doc => {
                setItem( {...doc.data(), id: doc.id} )
            })
    }, [itemId])


    return (
        <div className="">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )

}
 
