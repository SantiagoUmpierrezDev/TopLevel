import { Link } from "react-router-dom" 
import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import "./itemDetail.scss"

export const ItemDetail = ( {id, name, description, category, img, price, stock} ) => {

    const { addToCart, isInCart } = useCartContext()

    const [quantity , setQuantity] = useState('1') 

    const handleChange = input => {
        setQuantity(input.target.value);
    }

    const handleAddToCart = () => {
        const item = {
            id,
            name,
            description,
            category,
            img,
            price,
            quantity,
            stock
        }
            addToCart(item) 
    }


    if (stock > 0) {
        return (
            <div className="div__itemDetail">
                <div className="itemDetail__div">
                    <img className="itemDetail__div__img" src={img}/>
                </div>
                <div className="productInfo">
                    <h2 className="productInfo__name">{name}</h2>
                    <p className="productInfo__des">{description}</p>
                    <p className="productInfo__price"> U$D {price}</p>
                    <p className="productInfo__stock"> Stock: {stock}</p>
                    <div className="productInfo__div">
                        {
                            !isInCart(id) ? 
                                <div>
                                    <input className="div__itemCount" type="number" onChange={handleChange} min = { 1 } max = { stock } defaultValue = {1} />
                                    <button className="div__addToCartBtn" onClick={handleAddToCart}> Add to cart </button>
                                </div>
                            : <div> <Link to = "/cart" className="div__addToCartBtn"> Continue purchase </Link> </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="div__itemDetail">
            <div className="itemDetail__div">
                <img className="itemDetail__div__img" src={img}/>
            </div>
            <div className="productInfo">
                <h2 className="productInfo__name">{name}</h2>
                <p className="productInfo__des">{description}</p>
                <p className="productInfo__price"> U$D {price}</p>
                <p className="productInfo__stock"> Stock: We are out of stock at the moment</p>
                <div className="productInfo__div">   
                    <div> 
                        <Link to = "/" className="div__addToCartBtn"> Keep shopping </Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}