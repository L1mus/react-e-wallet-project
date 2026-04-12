import { Link } from "react-router";

import iconArrowUp from "../../assets/icons/u_arrow-growth.svg";
import iconPlus from "../../assets/icons/u_money-withdraw.svg";

export const BalanceCard = ({ balance = 0, phoneNumber = "-" }) => {
  return (
    <div className="w-full bg-primary rounded-[20px] p-7.5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
      <div className="flex flex-col gap-3 text-white">
        <span className="text-[18px] opacity-80 font-normal">Balance</span>
        <h2 className="text-[40px] font-bold">
          Rp {balance.toLocaleString("id-ID")}
        </h2>
        <span className="text-sm opacity-80 font-semibold tracking-wide">
          {phoneNumber}
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-auto">
        <Link
          to="/dashboard/transfer"
          className="w-full md:w-40.5 bg-white/20 hover:bg-white/30 transition-colors border border-white/60 text-white rounded-xl py-3 px-6 flex items-center justify-center gap-3 font-semibold text-[18px]"
        >
          <img
            src={iconArrowUp}
            alt="Transfer"
            className="w-7 h-7 object-contain brightness-0 invert"
          />
          Transfer
        </Link>

        <Link
          to="/dashboard/topup"
          className="w-full md:w-40.5 bg-white/20 hover:bg-white/30 transition-colors border border-white/60 text-white rounded-xl py-3 px-6 flex items-center justify-center gap-3 font-semibold text-[18px]"
        >
          <img
            src={iconPlus}
            alt="Top Up"
            className="w-7 h-7 object-contain brightness-0 invert"
          />
          Top Up
        </Link>
      </div>
    </div>
  );
};
