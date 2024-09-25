const ErrorComponent = ({ cart = [] }) => {
  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-700">Order Summary</h3>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2" aria-label={`Item: ${item.title}`}>
            <span>
              {item.title} - {item.quantity} x ${item.price.toFixed(2)}
            </span>
            <span>${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        ))
      )}
      <div className="flex justify-between font-semibold text-lg mt-4">
        <span>Total:</span>
        <span>
          ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ErrorComponent;
