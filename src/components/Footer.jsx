
const Footer = () => {
  return (
    <footer className="bg-green-400 text-white py-8 px-6">
      <div className="container mx-auto text-center md:flex md:justify-between">
        {/* Get to Know Us */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Get to Know Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-300 transition">About ShoppyGlobe</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Press Releases</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">ShoppyGlobe Science</a></li>
          </ul>
        </div>

        
        {/* Make Money with Us */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Make Money with Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-300 transition">Sell on ShoppyGlobe</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Become an Affiliate</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Advertise Your Products</a></li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Let Us Help You</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-gray-300 transition">Your Account</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Returns Centre</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm">
        <p className="mb-2">
          Conditions of Use & Sale | Privacy Notice | Interest-Based Ads
        </p>
        <p>
          &copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
