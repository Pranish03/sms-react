const Button = ({ children, type = "button", className }) => {
  return (
    <button
      type={type}
      className={`bg-green-600 text-white text-base px-4 py-2.5 rounded-lg hover:bg-green-600/90 cursor-pointer transition-colors ease-linear ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
