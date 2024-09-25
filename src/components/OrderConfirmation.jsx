import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center border border-gray-300">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
          Order Confirmation
        </h2>
        <p className="text-md text-gray-800 mb-6">
          Your order has been placed successfully! Thank you for shopping with ShoppyGlobe.
        </p>
        
        {/* Checkmark icon indicating successful order placement */}
        <svg
          className="w-16 h-16 text-blue-500 mx-auto mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm5 10l-5 5-2-2-1.5 1.5 3.5 3.5 6.5-6.5-1.5-1.5z"
            clipRule="evenodd"
          />
        </svg>

        <button
          onClick={handleGoHome}
          className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
