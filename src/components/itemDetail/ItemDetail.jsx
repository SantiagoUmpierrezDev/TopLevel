import { useNavigate } from "react-router-dom"
import "./itemDetail.scss"

export const ItemDetail = ( {name, description, img, price, stock} ) => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="div__itemDetail">
            <img className="itemDetail__img" src={img}/>
            <div className="productInfo">
                <h2 className="productInfo__name">{name}</h2>
                <p className="productInfo__des">{description}</p>
                <p className="productInfo__price"> U$D {price}</p>
                <p className="productInfo__stock"> Stock: {stock}</p>
                <button className="goBackBtn" onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}