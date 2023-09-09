import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice  = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice *5/100;
    const grandTotal = totalPrice+tax+totalShipping;
    return (
        <div className='cart'>
              <h3>order summary</h3>
                <p>Selected items : {cart.length}</p>
                <p>Total price : ${totalPrice}</p>
                <p>Shipping charge : ${totalShipping}</p>
                <p>Tax : ${tax.toFixed(2)} (with 5%)</p>
                <h3>Grand total : ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;