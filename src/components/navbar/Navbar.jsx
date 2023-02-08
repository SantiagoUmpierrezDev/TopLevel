import './navbar.scss'
import {CartWidget} from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
            <nav className='nav'>
                <Link className='nav__logo'  to="/" >Top<span className='logo__span'>Level</span></Link>
                <ul className='nav__list'>
                    <li className='list__item animation'><Link className='list__item__link'  to="/products/playstation" >PLAYSTATION</Link></li>
                    <li className='list__item animation'><Link className='list__item__link'  to="/products/xbox" >XBOX</Link></li>
                    <li className='list__item animation'><Link className='list__item__link'  to="/products/pc" >PC</Link></li>
                </ul>
                <div>
                    <CartWidget/>
                </div>
            </nav>
    )

}