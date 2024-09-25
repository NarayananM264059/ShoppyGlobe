import Logo from "./logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const Header = () => {
  const totalCarts = useSelector(selectCartItems); // Get cart items from redux store

  return (
    <header className="flex items-center justify-between py-4 bg-gradient-to-r from-purple-500 to-pink-500 sticky top-0 shadow-md px-8">
      <div className="flex items-center">
        <Logo /> {/* Logo component */}
        <h1 className="text-white text-2xl font-bold ml-4">ShopEase</h1> {/* App title */}
      </div>

      {/* Cart icon with item count */}
      <Link to={`/cart`} className="relative flex items-center">
        <div className="flex items-center">
          <span className="text-3xl text-white hover:text-yellow-300 transition duration-200">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          {totalCarts.length !== 0 && (
            <span className="absolute right-0 -top-2 bg-red-700 min-w-8 h-8 flex items-center justify-center rounded-full text-white font-bold shadow-lg">
              {totalCarts.length}
            </span>
          )}
        </div>
      </Link>
    </header>
  );
};

export default Header;
