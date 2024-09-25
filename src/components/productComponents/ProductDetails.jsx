import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useFetchSingleProduct } from "../../hooks/useFetchSingleProduct";
import { formatePrize } from "../../utils/helpers";
import { selectCartItems } from "../../redux/selectors/cartSelectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/reducers/cartSlice";
import BackButton from "../BackButton";

const ProductDetails = () => {
  const { id } = useParams();
  const cartItems = useSelector(selectCartItems);

  // Hook for fetching the single product from API
  const { product, isLoading, error } = useFetchSingleProduct(
    "https://dummyjson.com/products/",
    id
  );

  const cartProduct = cartItems.find((item) => item.id == id);
  const cartProductQuantity = cartProduct ? cartProduct.quantity : 1;
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(cartProductQuantity);

  const dispatch = useDispatch();

  // Setting initial image
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  // Function to increase quantity
  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity but ensure it doesn't go below 1
  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">{`Error: ${error}`}</p>;

  // Early return if product is null or undefined
  if (!product) return <p className="text-red-500">Product not found.</p>;

  return (
    <div className="container mx-auto p-4">
      {/* Back to Home Button */}
      <BackButton />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Product Image & Gallery */}
        <div className="lg:col-span-2">
          <img
            src={mainImage}
            alt={product?.title || "Product Image"}
            className="w-full h-80 object-contain border border-gray-300 rounded-lg shadow-lg"
          />
          {/* Add image thumbnails here for an enhanced gallery experience */}
        </div>

        {/* Product Details */}
        <div className="space-y-4 bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-black">{product?.title}</h1>
          <p className="text-lg text-gray-700">{product?.description}</p>
          <p className="text-2xl font-semibold text-green-600">
            {formatePrize(product.price * quantity)}
          </p>
          <p className="text-gray-600">
            <strong>Brand:</strong> {product?.brand}
          </p>
          <p className="text-gray-600">
            <strong>Availability:</strong> {product?.availabilityStatus}
          </p>
          <p className="text-gray-600">
            <strong>Warranty:</strong> {product?.warrantyInformation}
          </p>

          {/* Quantity Controls */}
          <div>
            <div className="flex items-center space-x-4 mt-4">
              <p className="text-lg font-semibold">Quantity:</p>
              <button
                onClick={handleDecrease}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-4 px-4 py-2 bg-orange-500 text-white text-lg font-bold rounded transition hover:bg-orange-600"
              aria-label="Add to cart"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
