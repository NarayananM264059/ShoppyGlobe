import { formatePrize } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setQuantity(1); // Reset quantity after adding to cart
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  return (
    <div
      key={product.id}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <img
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
        src={product.images[0] || 'placeholder-image-url'} // Fallback for image
        alt={`${product.title}-image`}
      />
      <div className="p-5">
        <Link to={`/productDetails/${product.id}`}>
          <h2 className="text-xl font-semibold text-black hover:text-green-500 transition-colors duration-300">
            {product.title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            {formatePrize(product.price)}
          </span>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center border rounded px-2 py-1 mr-2"
              aria-label="Product quantity"
            />
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-green-600 text-white font-bold uppercase rounded shadow hover:bg-green-700 transition-colors duration-300"
              aria-label="Add to cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
