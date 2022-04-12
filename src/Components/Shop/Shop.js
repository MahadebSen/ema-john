import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProduct from '../Hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useState([]);

    useEffect( () => {
       const storedCart = getStoredCart()
       const saveCart = [] 
    //  console.log(saveCart)
       for (const id in storedCart){
           const addedProduct = products.find(product => product.id === id); 
        if (addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)

            // console.log(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const handleAddToCart = (item) => {
        // console.log('clicked', item);
        const newCart = [...cart, item];
        setCart(newCart);
        addToDb(item.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map((product) => <Product
                        key={product.id}
                        product= {product}
                        handleAddToCart= {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                {/* <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p> */}
                <Cart 
                cart={cart}
                >
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;