import { useDispatch, useSelector } from "react-redux"
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearItems())
    }
    return (
        <div className="mt-8 p-8 bg-white border border-neutral-200 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-neutral-900">🛒 Your Cart</h1>
                {cartItems.length > 0 && (
                    <span className="text-lg font-semibold text-orange-600 bg-orange-100 px-4 py-2 rounded-full">
                        {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
                    </span>
                )}
            </div>
            
            {cartItems.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-xl text-neutral-600 font-medium mb-6">Your cart is empty</p>
                    <a href="/" className="inline-block px-6 py-3 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
                        Continue Shopping
                    </a>
                </div>
            ) : (
                <div>
                    <div className="space-y-3 mb-8 max-h-96 overflow-y-auto">
                        {cartItems.map((item, index) => (
                            <div key={`${item}-${index}`} className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
                                <span className="text-lg text-neutral-800 font-medium">{item}</span>
                                <span className="text-sm text-neutral-500">#{index + 1}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex gap-3 pt-6 border-t border-neutral-200">
                        <button className="flex-1 px-6 py-3 rounded-lg text-white font-semibold shadow-md bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 cursor-pointer transition-all duration-200" onClick={handleClearCart}>
                            ✕ Clear Cart
                        </button>
                        <button className="flex-1 px-6 py-3 rounded-lg text-white font-semibold shadow-md bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 cursor-pointer transition-all duration-200">
                            💳 Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart