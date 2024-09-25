import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelectors";
import { formatePrize } from "../../utils/helpers";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <p className="text-center text-red-500 text-5xl mt-12">
        Your cart is empty!
      </p>
    );
  }

  const handleRemovecart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="bg-blue-50 p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items section */}
          <div className="flex-1 space-y-4 overflow-y-auto max-h-96 bg-white rounded-lg shadow-lg p-4">
            {cartItems.map((cart) => (
              <CartItem
                key={cart.id}
                item={cart}
                onRemove={() => handleRemovecart(cart.id)}
                onIncrease={() => handleIncreaseQuantity(cart.id)}
                onDecrease={() => handleDecreaseQuantity(cart.id)}
              />
            ))}
          </div>

          {/* Cart summary section */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-none w-full lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Cart Summary</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Total Items:</span>
                <span className="font-semibold">{cartItems.length}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-700">
                <span>Total Price:</span>
                <span className="font-semibold">
                  {formatePrize(cartItemsTotal)}
                </span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
