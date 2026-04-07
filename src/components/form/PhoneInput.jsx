import { cn } from "../../utils/cn";

/**
 * PhoneInput Components
 * @param {String} props.avatar
 * @param {String} props.name
 * @param {Number} props.rating
 * @param {String} props.text
 * @returns {JSX.element}
 */

export const PhoneInput = ({
  label,
  placeholder = "812 xxxx xxxx",
  error,
  className,
  ...props
}) => {
  const handleOnChange = (e) => {
    const value = e.target.value;
    if (!/^[0-9]*$/.test(value)) return "Must be Number";
    e.target.value = value;
    if (props.onChange) props.onChange(e);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={label} className="text-base font-normal text-black">
          {label}
        </label>
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
          type="tel"
          id={label}
          inputMode="numeric"
          onChange={handleOnChange}
          placeholder={placeholder}
          className={cn(
            "flex-1 h-full px-4 text-black text-sm bg-transparent outline-none placeholder:text-grey",
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
};
