import React from "react";
import clsx from "clsx";

 const variants = {
  primary: "bg-[var(--primary-color)] text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

 const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none";

  const disabledStyles =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
          variants[variant],
          sizes[size],
          disabledStyles,
          className
  )}
      {...rest}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
};

export default Button;
