import './cartWidget.scss'
import { CiShoppingCart } from 'react-icons/ci';

export const CartWidget = () => {
    return (
        <li className='list__item'>
            <a href="#" className='cart__icon'>
            <CiShoppingCart />
            <span className='cart__counter'>21</span>
            </a>
        </li>
    )
}