import { Link } from "react-router-dom"
import './item.scss'

export const Item = ({ name, img, price, id}) => {

    return (
            <div className="productCard"><Link to={`/detail/${id}`}>
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
                    <Link 
                    className="shopNowBtn" 
                    to={`/detail/${id}`}> 
                    <span class="button_top"> Shop now </span> 
                    </Link>
                </div>
            </div>
            </Link>
        </div>
    )
}