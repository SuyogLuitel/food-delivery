import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' required />
                    <input type="text" placeholder='Last Name' required />
                </div>
                <input type="text" placeholder='Email Address' required />
                <input type="text" placeholder='Street Address' required />
                <div className="multi-fields">
                    <input type="text" placeholder='City' required />
                    <input type="text" placeholder='Province' required />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip Code' required />
                    <input type="text" placeholder='Country' required />
                </div>
                <input type="text" placeholder='Phone' required />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()}</b>
                        </div>
                    </div>
                    <button>Proceed to PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
