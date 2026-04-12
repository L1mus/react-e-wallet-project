import { cn } from "../../utils/cn";

export const StatCard = ({
  title,
  amount,
  percentage,
  isPositive,
  timeframe,
  icon,
}) => {
  return (
    <div className="bg-white rounded-[20px] border border-[#E5E5E5] p-6 flex flex-col gap-4 shadow-sm w-full">
      <div className="flex items-center gap-3">
        {icon && (
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        )}
        <span className="text-[#7A7A7A] font-medium text-[14px]">{title}</span>
      </div>

      <h3 className="text-[28px] font-bold text-[#3A3D42]">
        Rp {amount.toLocaleString("id-ID")}
      </h3>

      <div className="flex items-center gap-2 text-[14px] font-medium mt-1">
        <span className={cn(isPositive ? "text-green-500" : "text-[#FF5B37]")}>
          {isPositive ? "+" : ""}
          {percentage}%
        </span>
        <span className="text-[#7A7A7A]">{timeframe}</span>
      </div>
    </div>
  );
};
