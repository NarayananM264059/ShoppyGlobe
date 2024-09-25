const BackButton = () => {
  return (
    <button
      className="mb-4 flex items-center text-green-400 hover:bg-green-400 hover:text-white border border-green-400 rounded-lg px-4 py-2 transition duration-300 ease-in-out shadow-lg"
      onClick={() => window.history.back()}
    >
      <span className="mr-2">
        <i className="fa-solid fa-arrow-left"></i>
      </span>
      Back to Home
    </button>
  );
};

export default BackButton;
