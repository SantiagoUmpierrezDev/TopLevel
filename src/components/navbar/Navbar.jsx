import './navbar.scss'
import {CartWidget} from '../cartWidget/cartWidget'

export const Navbar = () => {
    return (
            <nav className='nav'>
                <a href="#" className='nav__logo'>Top<span className='logo__span'>Level</span></a>
                <ul className='nav__list'>
                    <li className='list__item animation'><a className='list__item__link' href="#">SHOP</a></li>
                    <li className='list__item animation'><a className='list__item__link' href="#">ABOUT</a></li>
                    <CartWidget />
                </ul>
            </nav>
    )

}