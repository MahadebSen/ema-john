import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, children} = props
    let total = 0;
    let shipping = 0;

    for(const product of cart ){
        total = total + product.price
        shipping = shipping + product.shipping
    }

    let tex = parseFloat((total * 10/100).toFixed(2))
    let grandTotal = total + shipping + tex 
    // console.log(tex)
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping: ${shipping}</p>
            <p>Tax: ${tex}</p>
            <h3>Grand Total: ${+grandTotal.toFixed(2)}</h3>
            {children}
        </div>
    );
};

export default Cart;