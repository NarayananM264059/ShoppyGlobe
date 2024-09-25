import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"; 

const Logo = () => {
  return (
    <Link to={"/home"} className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
      {/* Logo Icon */}
      <FontAwesomeIcon icon={faShoppingBag} className="text-white text-4xl transform transition-transform duration-300 hover:rotate-12" />
      <span className="text-white text-4xl font-extrabold tracking-wider shadow-md hover:underline">
        ShoppyGlobe
      </span>
    </Link>
  );
};

export default Logo;
