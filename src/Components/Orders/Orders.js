import React from 'react';
import useProducts from '../Hooks/useProducts';
import useCart from '../Hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handelRemoveCart = (item) => {
      const restItems = cart.filter(pd => pd.id !== item.id);
      setCart(restItems);
      removeFromDb(item.id);
    }

    return (
        <div>
            {/* <h1>This is orders</h1>
            <h2>Total item: {products.length}</h2>
            <h3>Ordered item: {cart.length}</h3> */}
            
            <div className='shop-container'>
              <div className=''>
                  {
                      cart.map(item => <ReviewItem
                        key={item.id}
                        item={item}
                        handelRemoveCart={handelRemoveCart}
                      ></ReviewItem>)
                  }
                  
              </div>
              <div className='cart-container'>
                <Cart 
                cart={cart}
                >
                  <Link to='/inventory'>
                    <button>Proceed Checkout</button>
                  </Link>
                </Cart>
              </div>
            </div>
        </div>
    );
};

export default Orders;