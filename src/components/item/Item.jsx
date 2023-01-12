import { Link } from "react-router-dom"
import './item.scss'

export const Item = ({ name, img, price, id}) => {

    return (
        <div className="productCard">
            <img
            className="div__img"
            src={img}
            />
            <div className="productInformation">
                <div className="pI__div">
                    <p className="div__paragraph">{name}</p>
                    <p className="price__paragraph">U$D {price}</p>
                </div>
                <div className="div__shopNow">
                    <Link className="shopNowBtn" to={`/detail/${id}`}> Shop Now </Link>
                </div>
            </div>
        </div>
    )
}