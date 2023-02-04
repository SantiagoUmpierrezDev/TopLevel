import './checkout.scss'
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from '../../context/cartContext'
import { db } from "../../firebase/firebaseConfig"
import { collection, writeBatch, documentId, getDocs, query, where, addDoc } from "firebase/firestore"
import { Formik } from "formik"
import * as Yup from 'yup'

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const schema = Yup.object().shape({
    firstName: Yup.string()
    .min(1, 'Minimum 1 character')
    .max(30, '30 characters max')
    .required('You have to fill out this field'),
    lastName: Yup.string()
    .min(1, 'Minimum 1 character')
    .max(30, '30 characters max')
    .required('You have to fill out this field'),
    address: Yup.string().min(3, 'Minimum 3 characters')
    .max(40, '40 characters max')
    .required('You have to fill out this field'),
    email: Yup.string()
    .email('The email address is not valid')
    .required('You have to fill out this field'),
    mobilePhone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(8, 'Minimum 8 characters')
    .max(9, '9 characters max')
    .required ('You have to fill out this field'),
    city: Yup.string().min(2, 'Minimum 2 characters')
    .max(40, '40 characters max')
    .required('You have to fill out this field'),
    zip: Yup.string().min(4, 'Minimum 4 characters')
    .max(6, '6 characters max')
    .required('You have to fill out this field'),
})

export const Checkout = () => {

    
    const { cart, emptycart, cartTotal} = useCartContext();
    
    const shipping = 10;
    const taxes = cartTotal() / 4;
    const totalOrder = shipping + taxes + cartTotal();

    const [orderId, setOrderId] = useState(null)

    const createOrder = async (values) => {

    const order = {
        customer: values,
        items: cart,
        total: cartTotal()
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db, 'Orders')
    const productsRef = collection(db, 'Products')
    const itemsRef = query( productsRef, where( documentId(), 'in', cart.map(prod => prod.id) ) )
    
    const outOfStock = []
            
    const products = await getDocs(itemsRef)
        
    products.docs.forEach(doc => {
        const item = cart.find(item => item.id === doc.id)
    
        if (doc.data().stock >= item.quantity) {
            batch.update(doc.ref, {
            stock: doc.data().stock - item.quantity
            })
        } else {
                outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        batch.commit()
            .then(() => {
                addDoc(ordersRef, order)
                    .then((doc) => {
                        setOrderId(doc.id)
                        emptycart()
                    })
                    .catch((error) => console.log(error) )
            })
    } else {
        alert("Hay items sin stock")
    }
}


    if (orderId) {
        return (
            <div className="order__div">
                <h1 className='order__div__h2'> Your order has been placed successfully</h1>
                <p className='order__div__p'>Your order: <span className='order__div__p__span'>{orderId}</span></p>
                <Link className='order__div__link' to="/">Continue shopping</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }


    return (
        <div className='checkout__div'>
            <div className="checkout__div__form">
                <h2 className='checkout__div__form__h2'>Billing address</h2>
                <hr />
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        address: '',
                        city: '',
                        zip: '',
                        mobilePhone: ''
                    }}
                    onSubmit={(values) => {
                        createOrder(values) 
                    }}
                    validationSchema={schema}
                >
                    {({
                        values, handleChange, handleSubmit, errors
                    }) => (
                        <form className='checkout__form' onSubmit={handleSubmit}>

                            <label className='checkout__form__label'> FIRST NAME* </label>
                            
                            <input
                                className="checkout__form__inputs"
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                value={values.firstName}
                            />
                            {errors.firstName && <p className='checkout__form__error'>{errors.firstName}</p>}

                            <label className='checkout__form__label'> LAST NAME* </label>

                            <input
                                className="checkout__form__inputs"
                                onChange={handleChange}
                                type="text"
                                name="lastName"
                                value={values.lastName}
                            />
                            {errors.lastName && <p className='checkout__form__error'>{errors.lastName}</p>}

                            <label className='checkout__form__label'> EMAIL* </label>

                            <input
                                className="checkout__form__inputs"
                                onChange={handleChange}
                                type="text"
                                name="email"
                                value={values.email}
                            />
                            {errors.email && <p className='checkout__form__error'>{errors.email}</p>}

                            <label className='checkout__form__label'> CITY* </label>

                            <input
                                className="checkout__form__inputs"
                                onChange={handleChange}
                                type="text"
                                name="city"
                                value={values.city}
                            />
                            {errors.city && <p className='checkout__form__error'>{errors.city}</p>}

                            <label className='checkout__form__label'> ADDRESS* </label>

                            <input
                                className="checkout__form__inputs"
                                onChange={handleChange}
                                type="text"
                                name="address"
                                value={values.address}
                            />
                            {errors.email && <p className='checkout__form__error'>{errors.email}</p>}

                            <label className='checkout__form__label'> ZIP / POSTCODE* </label>

                            <input
                                className="checkout__form__inputs"
                                onChange={handleChange}
                                type="text"
                                name="zip"
                                value={values.zip}
                            />
                            {errors.zip && <p className='checkout__form__error'>{errors.zip}</p>}

                            <label className='checkout__form__label'> MOBILE PHONE* </label>

                            <input
                                className="checkout__form__inputs"
                                onChange={handleChange}
                                type="text"
                                name="mobilePhone"
                                value={values.mobilePhone}
                            />
                            {errors.mobilePhone && <p className='checkout__form__error'>{errors.mobilePhone}</p>}

                            <button className="submitBtn" type="submit">Place order</button>
                        </form>
                    )}
                </Formik>
            </div>
            <div className='payment__div'>
                <h2 className='payment__div__h2'>Billing summary</h2>
                <hr/>
                    <div className='billingSummary__div'>
                        <p className='billingSummary__div__p'>Items total</p>
                        <p className='billingSummary__div__p'>U$D {cartTotal()}</p>
                    </div>
                        <hr />
                    <div className='billingSummary__div'>
                        <p className='billingSummary__div__p'>Shipping</p>
                        <p className='billingSummary__div__p'>U$D {shipping}</p>
                    </div>
                        <hr />
                    <div className='billingSummary__div'>
                        <p className='billingSummary__div__p'>DUTIES, TAXES & FEES</p>
                        <p className='billingSummary__div__p'>U$D {taxes}</p>
                    </div>
                        <hr />
                    <div className='billingSummary__div'>
                        <p className='billingSummary__div__p'>Total for your order</p>
                        <p className='billingSummary__div__p'>U$D {totalOrder}</p>
                    </div>
                    <p className='billingSummary__div__pDisclaimer'>ALL APPLICABLE DUTIES, TAXES AND FEES ARE INCLUDED IN THE TOTAL AMOUNT OF YOUR ORDER. WE GUARANTEE YOU WILL NOT BE REQUIRED TO PAY ANY ADDITIONAL COST ON DELIVERY.</p>
            </div>
        </div>
    )
}