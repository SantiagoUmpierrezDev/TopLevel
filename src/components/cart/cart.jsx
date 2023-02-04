import './cart.scss'
import { RxCrossCircled } from 'react-icons/rx'
import { TbShoppingCartOff } from 'react-icons/tb'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart, emptycart, cartTotal, removeItem } = useCartContext();

        if (cart.length > 0) {
            return (
            <div className='cart__div'>
                <h1 className='cart__div__h1'>Your cart</h1>
                <hr className='cart__div__hr' />
                {
                    cart.map(item => (
                        <table key={item.id} className='div__table'>
                            <thead className='div__table__thead'>
                                <tr className='thead__tr'>
                                    <th></th>
                                    <th></th>
                                    <th className='tr__th__product tr__td '> Product</th>
                                    <th className='tr__th__price  tr__td'> Price</th>
                                    <th className='tr__th__quantity tr__td'> Quantity </th>
                                    <th className='tr__th__total tr__td'> Total </th>
                                </tr>
                            </thead>
                            <tbody className='div__table__tbody'>
                                <tr className='tbody__tr'>
                                    <td className='tr__td__cross'><button className='crossBtn' onClick={() => removeItem(item.id)}><RxCrossCircled /></button></td>
                                    <td className='tr__td__img '> <img className='table__img' src={ item.img } alt="" /></td>
                                    <td className='tr__td td__name'>{ item.name }</td>                                  
                                    <td  className='tr__td'>{ item.price }</td>
                                    <td className='tr__td td__quantity'> {item.quantity} </td>
                                    <td className='tr__td td__total'> U$D { item.price * item.quantity } </td>
                                </tr>
                            </tbody>
                        </table>
                    ))
                }
                <div className='cartTotal__div'>
                    <p>Cart Subtotal: U$D {cartTotal()}</p>
                </div>
                <button className='emptyCartBtn' onClick={() => emptycart()}>Empty Cart</button>
                <Link to="/checkout"><button className='continueBtn'>Continue</button></Link>
             </div>
            )
        } 

        return (
            <div className='cart__div'>
                <h1 className='cart__div__h1'>Your cart</h1>
                <hr className='cart__div__hr' />
                <div className='emptyCart__div'>
                    <p className='cartEmpty__p'> <TbShoppingCartOff className='emptyCart__icon'/> Your cart is empty</p>
                </div>
                <Link to="/"><button className='continueBtn'>Continue shopping</button></Link>
            </div>
        )
    
}