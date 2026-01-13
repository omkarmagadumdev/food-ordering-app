import { useDispatch, useSelector } from "react-redux"
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearItems())
    }
    return (
        <div className="mt-6 p-6 bg-white border border-neutral-200 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Cart</h1> 
            <button className="px-4 py-2 rounded-md text-white font-semibold shadow bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors  " onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 ? (
                <p className="text-neutral-600">Your cart is empty.</p>
            ) : (
                <ul className="list-disc list-inside space-y-2 text-neutral-800">
                    {cartItems.map((item, index) => (
                        <li key={`${item}-${index}`}>{item}</li>
                    ))}
                </ul>
            )}
            
        </div>
    );
};

export default Cart