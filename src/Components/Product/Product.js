import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { handleAddToCart,product } = props;
    const { category, name, img, seller, price, ratings, quantity, shipping } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p>Ratings: {ratings}</p>
            <p>Quantity: {quantity}</p>
            <p>Shipping: {shipping}</p>
            </div>

            <button onClick={() => handleAddToCart(product) } className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;