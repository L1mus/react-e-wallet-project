import { Link } from "react-router";
import { cn } from "../../utils/cn";

export const SidebarItem = ({
  icon,
  label,
  to,
  isActive,
  onClick,
  isDanger,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 py-3 px-3 text-lg transition-all duration-200 rounded-xl",
        isActive
          ? "bg-primary text-white font-semibold shadow-sm"
          : isDanger
            ? "text-red-500 hover:bg-red-50"
            : "text-gray-500 hover:text-primary hover:bg-gray-50",
      )}
    >
      <img
        src={icon}
        alt={label}
        className={cn(
          "w-6 h-6 object-contain transition-all",
          isActive ? "brightness-0 invert" : "opacity-70",
        )}
      />
      <span>{label}</span>
    </Link>
  );
};
