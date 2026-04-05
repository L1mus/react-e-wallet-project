import { cn } from "../../utils/cn";

export const SocialButton = ({
  icon,
  text,
  isLoading = false,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      disabled={isLoading || props.disabled}
      className={cn(
        "w-full h-13 flex items-center justify-center gap-3 border border-[#E8E8E8] rounded-full bg-white transition-colors duration-200",
        "hover:bg-gray-50 active:bg-gray-100 outline-none cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <img src={icon} alt={text} className="w-6 h-6 object-contain" />
      <span className="text-[#4F5665] font-medium text-sm">{text}</span>
    </button>
  );
};
