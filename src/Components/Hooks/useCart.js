import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (items) => {
    const [cart, setCart] = useState([]);

    useEffect( () => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart){
            const addedProduct = items.find(item => item.id === id);
            if (addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [items]);

    return [cart, setCart];
};

export default useCart;