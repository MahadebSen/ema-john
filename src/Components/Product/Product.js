import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart} = props;
    const {id, img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
            <p className='product-name product-font'>{name}</p>
            <p className='product-price product-font'>Price: ${price}</p>
            <p className='product-manufacturer product-font'>Manufacturer : {seller}</p>
            <p className='product-font'>Rating : {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button> {}
        </div>
    );
};

export default Product;