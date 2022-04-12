import React from 'react';
import './ReviewItem.css';
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


const reviewItem = (props) => {
    const { item, handelRemoveCart} = props;
    const {name, img, price, quantity, shipping} = item;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>

            <div className='review-item-details-container'>

                <div className="review-item-details">
                    <h2>{name}</h2>
                    <p>Price: <span> ${price}</span></p>
                    <p>Shipping Charge: <span> ${shipping}</span></p>
                </div>

                <div className='Delete-container'>
                    <button onClick={() => handelRemoveCart(item)}><FontAwesomeIcon className='font' icon={faTrashAlt}></FontAwesomeIcon></button> 
                </div>
            </div>
        </div>
    );
};

export default reviewItem;