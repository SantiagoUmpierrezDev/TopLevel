import { Item } from "../item/Item"
import './itemList.scss'

export const ItemList = ( { products } ) => {

    return (
        <div className="div__itemList">
            {/* <h1>The best for the best</h1> */}

            <div className="itemList__div">
            { products.map((el) => < Item key={el.id} {...el} /> ) }
            </div>
        </div>
    )
}