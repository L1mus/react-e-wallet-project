import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const PhoneInput = forwardRef(
  (
    { label, placeholder = "812 3456 7890", error, className, ...props },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-base font-normal text-black">{label}</label>
        )}

        <div
          className={cn(
            "flex items-center relative w-full h-11 rounded-lg overflow-hidden border transition-all duration-200 bg-white",
            error
              ? "border-danger focus-within:border-danger focus-within:ring-1 focus-within:ring-danger"
              : "border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
          )}
        >
          <div className="flex items-center justify-center px-4 bg-gray-50 h-full border-r border-gray-200">
            <span className="text-sm font-semibold text-black">+62</span>
          </div>

          <input
            ref={ref}
            type="tel"
            inputMode="numeric"
            placeholder={placeholder}
            className={cn(
              "flex-1 h-full px-4 text-black text-sm bg-transparent outline-none placeholder:text-gray-400",
              className,
            )}
            {...props}
          />
        </div>

        {error && (
          <span className="text-xs font-medium text-danger">{error}</span>
        )}
      </div>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
