
const BackButton = () => {
  return (
    <button
      className="mb-4 flex items-center text-green-400 hover:underline transition duration-300 ease-in-out"
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
