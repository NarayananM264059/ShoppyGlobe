import { formatePrize } from "../../utils/helpers";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove, onDecrease, onIncrease }) => {
  const { id, title, price, images, quantity } = item;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <img
          src={images[0]}
          alt={`${title}-image`}
          className="w-24 h-24 object-cover rounded-lg shadow-sm"
        />
        <div className="ml-4 flex-grow">
          <Link to={`/productDetails/${id}`}>
            <h2 className="text-2xl font-bold text-blue-600 underline hover:text-blue-800 transition duration-200">
              {title}
            </h2>
          </Link>
          <p className="text-gray-700 font-semibold">{formatePrize(price)}</p>
        </div>
        <button onClick={onRemove} className="text-red-600 hover:text-red-800 transition duration-200">
          Remove
        </button>
      </div>

      {/* Quantity controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={onDecrease}
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-200 transition duration-200"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={onIncrease}
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-200 transition duration-200"
          >
            +
          </button>
        </div>
        <p className="font-semibold text-lg text-blue-700">{formatePrize(price * quantity)}</p>
      </div>
    </div>
  );
};

export default CartItem;
