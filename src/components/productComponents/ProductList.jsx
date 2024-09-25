import Loader from "../Loader";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { useEffect, useState } from "react"; 

const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts(`https://dummyjson.com/products`);
  const totalCarts = useSelector((state) => state.cart.items); 
  const [showCart, setShowCart] = useState(false); 

  // Handle scroll to show/hide cart icon
  useEffect(() => {
    const handleScroll = () => setShowCart(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 bg-white z-10 shadow-md">
        <h2 className="text-3xl font-bold text-center p-5">Our Products</h2>
      </header>

      <main className="flex-grow p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </main>

      {showCart && (
        <div className="fixed bottom-5 right-5 z-20">
          <Link to={`/cart`} className="flex items-center bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-200">
            <span className="text-3xl text-white">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            {totalCarts.length > 0 && (
              <span className="absolute right-0 -top-2 bg-red-700 min-w-8 h-8 flex items-center justify-center rounded-full text-white font-bold shadow-lg">
                {totalCarts.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductList;
