import './cartWidget.scss'
import { CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext';

export const CartWidget = () => {

    const {totalQuantity} = useCartContext()

    return (
        <li className='list__item'>
                <Link className='cartLink' to='/cart'> <CiShoppingCart /> </Link>
                <span className='cart__counter'>{totalQuantity()}</span>  
        </li>
    )
}