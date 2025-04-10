import { cn } from "../../lib/utils";

export const Button = ({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "transition-colors duration-200 rounded-md flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-black text-white rounded-md hover:bg-black/85",
    secondary: "bg-gray-100 rounded-md hover:bg-gray-200",
    ghost: "hover:bg-gray-100 rounded-full",
  };

  const sizes = {
    sm: "p-2",
    md: "px-4 py-3",
    lg: "px-8 py-3",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        !children && "rounded-full p-3", // Estilo automático cuando no hay texto
        className
      )}
      {...props}
    >
        {iconLeft}
        {children && <span className={size === "sm" ? "text-sm" : ""}>{children}</span>}
        {iconRight}
    </button>
  );
};
