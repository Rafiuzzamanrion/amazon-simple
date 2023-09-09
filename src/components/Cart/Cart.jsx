import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // shortcut
        // product.quantity = product.quantity ||1;
        totalPrice  = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
         quantity = quantity + product.quantity;
    }
    const tax = totalPrice *5/100;
    const grandTotal = totalPrice+tax+totalShipping;
    return (
        <div className='cart'>
              <h3>order summary</h3>
                <p>Selected items : {quantity}</p>
                <p>Total price : ${totalPrice}</p>
                <p>Shipping charge : ${totalShipping}</p>
                <p>Tax : ${tax.toFixed(2)} (with 5%)</p>
                <h3>Grand total : ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;