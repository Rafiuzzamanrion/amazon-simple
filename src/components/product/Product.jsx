import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';



const Product = (props) => {
    const {name,img,seller,quantity,price,ratings} = props.product;
    const handleAddTOCart = props.handleAddTOCart;
    return (
        <div className='product'>
           <img src={img} alt="" />
          <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
              <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} stars</p>
          </div>
          <button onClick={()=>handleAddTOCart(props.product)} className='btn-cart'>
            Add to cart 
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
    );
};

export default Product;