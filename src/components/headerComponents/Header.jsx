import Logo from "./logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors"; 

const Header = () => {
    const totalCarts = useSelector(selectCartItems); // Fetch cart items
    const items = totalCarts.length; // Use the length for the cart count

    return (
        <header className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-pink-600 sticky top-0 shadow-lg">
            <div className="flex items-center space-x-3">
                <Logo />
                <h1 className="text-white text-3xl font-semibold tracking-wide">ShopEase</h1>
            </div>

            {/* Navigation Links and Cart icon */}
            <nav className="flex items-center space-x-4">
                <Link className="text-white text-lg hover:text-yellow-300 transition duration-300 ease-in-out" to="/">Home</Link>
                <Link className="text-white text-lg hover:text-yellow-300 transition duration-300 ease-in-out" to="/login">Login</Link>
                <Link to={`/cart`} className="relative flex items-center">
                    <span className="text-3xl text-white hover:text-yellow-300 transition duration-300 ease-in-out">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    {items > 0 && (
                        <span className="absolute right-0 -top-2 bg-red-600 min-w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-xs shadow-md">
                            {items}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
