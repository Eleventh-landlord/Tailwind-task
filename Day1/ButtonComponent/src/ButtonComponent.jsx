function ButtonComponent({
  children,
  variant = "primary",
  size = "medium",
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none";

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-white text-green-600 border border-green-600 hover:bg-green-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}


export default ButtonComponent;