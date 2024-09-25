const Footer = () => {
  return (
    <footer className="bg-green-400 text-black py-10 px-6">
      <div className="container mx-auto text-center md:flex md:justify-between">
        {/* Get to Know Us */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-bold text-xl mb-3">Get to Know Us</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-700 transition text-base">About ShoppyGlobe</a></li>
            <li><a href="#" className="hover:text-gray-700 transition text-base">Careers</a></li>
            <li><a href="#" className="hover:text-gray-700 transition text-base">Press Releases</a></li>
            <li><a href="#" className="hover:text-gray-700 transition text-base">ShoppyGlobe Science</a></li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-bold text-xl mb-3">Let Us Help You</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-700 transition text-base">Your Account</a></li>
            <li><a href="#" className="hover:text-gray-700 transition text-base">Returns Centre</a></li>
            <li><a href="#" className="hover:text-gray-700 transition text-base">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm">
        <p className="mb-2 text-gray-600">
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
