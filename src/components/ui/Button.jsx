import { cn } from "../../utils/cn";

/**
 * Button
 * @typedef {object} ButtonProps
 * @param {String} props.name
 * @param {String} props.variant
 * @param {String} props.size
 * @param {Boolean} props.IsFullWidht
 * @param {Boolean} props.isLoading
 * @param {String} props.className
 * @returns  {JSX.Element}
 */
export const Button = ({
  children,
  variant = "primary",
  size = "lg",
  isFullWidth = false,
  isLoading = false,
  className,
  ...props
}) => {
  return (
    <button
      disabled={isLoading || props.disabled}
      className={cn(
        "flex items-center justify-center font-semibold rounded-md transition-all duration-300 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        {
          "bg-primary text-white border border-primary hover:bg-white hover:text-primary":
            variant === "primary",

          "bg-white text-primary border border-primary hover:bg-primary hover:text-white":
            variant === "outline",

          "bg-white text-primary border border-white hover:bg-gray-100":
            variant === "white",

          "bg-transparent text-white border border-white hover:bg-white hover:text-primary":
            variant === "outline-white",
        },

        {
          "h-9 px-6 text-sm": size === "sm",
          "h-11 px-8 text-base": size === "md",
          "h-13 px-10 text-base": size === "lg",
        },

        isFullWidth ? "w-full" : "w-max",

        className,
      )}
      {...props}
    >
      {isLoading ? "Processing..." : children}
    </button>
  );
};
