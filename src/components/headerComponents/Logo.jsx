import { Link } from "react-router-dom";
// Import the SVG logo
import logo from "../../assets/logo.svg"; 

const Logo = () => {
  return (
    <Link to={"/home"} className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
      {/* Use the imported SVG logo */}
      <img src={logo} alt="ShoppyGlobe Logo" className="h-12" />
      <span className="text-white text-4xl font-extrabold tracking-wider shadow-md hover:underline">
        ShoppyGlobe
      </span>
    </Link>
  );
};

export default Logo;
