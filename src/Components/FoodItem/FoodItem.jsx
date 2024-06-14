import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img src={image} alt={name} className='food-item-image' />
                {!cartItem[id] ?
                    <img
                        className='add'
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="add"
                    />
                    :
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt="remove"
                        />
                        <p>{cartItem[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt="add"
                        />
                    </div>

                }
            </div>
            <div className='food-item-info'>
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <div className="food-item-desc">
                    {description}
                </div>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
