import { ItemDetail } from "../itemDetail/ItemDetail";
import { RequestDataPerId } from "../../helpers/dataRequest"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.scss"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        RequestDataPerId( Number(itemId) )
            .then((data) => {
                setItem(data)
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
 
