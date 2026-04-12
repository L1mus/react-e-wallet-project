import { StatCard } from "../../components/ui/StatCard";

import iconBalance from "../../assets/icons/balance.svg";
import iconIncome from "../../assets/icons/u_money-withdraw.svg";
import iconExpense from "../../assets/icons/u_money-withdraw-up.svg";
import iconArrowUp from "../../assets/icons/ArrowRise-s-green.svg";
import iconArrowDown from "../../assets/icons/ArrowRise-s-red.svg";

export const Dashboard = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-6">
      <div className="flex-7 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Balance"
            amount={120000}
            percentage="2"
            isPositive={true}
            timeframe="3 Days Ago"
            icon={iconBalance}
          />
          <StatCard
            title="Income"
            amount={2120000}
            percentage="11.01"
            isPositive={true}
            timeframe=" "
            icon={iconIncome}
          />
          <StatCard
            title="Expense"
            amount={200000}
            percentage="-5.06"
            isPositive={false}
            timeframe=" "
            icon={iconExpense}
          />
        </div>

        <div className="bg-white rounded-[20px] border border-[#E5E5E5] p-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm w-full">
          <h3 className="font-bold text-black text-lg">Fast Service</h3>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary/10 text-primary px-7 py-3 rounded-xl font-bold hover:bg-primary/20 transition-colors">
              <img src={iconArrowDown} alt="Top Up" className="w-5 h-5" />
              <span>Top Up</span>
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary text-white px-7 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              <img
                src={iconArrowUp}
                alt="Transfer"
                className="w-5 h-5 brightness-0 invert"
              />
              <span>Transfer</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[20px] border border-[#E5E5E5] p-7.5 shadow-sm flex flex-col min-h-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#3A3D42] text-lg">Income Chart</h3>
            <div className="flex gap-3">
              <select className="bg-gray-50 border border-gray-200 text-sm font-medium rounded-xl px-4 py-2 outline-none cursor-pointer">
                <option>7 Days</option>
              </select>
              <select className="bg-gray-50 border border-gray-200 text-sm font-medium rounded-xl px-4 py-2 outline-none cursor-pointer">
                <option>Income</option>
              </select>
            </div>
          </div>
          <div className="flex-1 border-2 border-dashed border-gray-200 bg-gray-50 rounded-xl flex items-center justify-center">
            <span className="text-gray-400 font-semibold">
              Render Recharts BarChart di sini
            </span>
          </div>
        </div>
      </div>

      <div className="flex-4 bg-white rounded-[20px] border border-[#E5E5E5] p-7.5 shadow-sm flex flex-col h-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-[#3A3D42] text-lg">
            Transaction History
          </h3>
          <button className="text-primary text-[14px] font-semibold hover:underline cursor-pointer">
            See All
          </button>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?name=Samuel+Suhi&background=F5F5F5&color=3A3D42"
                alt="Samuel"
                className="w-13 h-13 rounded-[14px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[#3A3D42] text-[16px]">
                  Samuel Suhi
                </span>
                <span className="text-[14px] text-[#7A7A7A]">Transfer</span>
              </div>
            </div>
            <span className="font-bold text-green-500 text-[16px]">
              +Rp50.000
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?name=Floyd+Miles&background=F5F5F5&color=3A3D42"
                alt="Floyd"
                className="w-13 h-13 rounded-[14px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-base">
                  Floyd Miles
                </span>
                <span className="text-sm text-grey">Send</span>
              </div>
            </div>
            <span className="font-bold text-red-500 text-base">-Rp50.000</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?name=Bessie+Cooper&background=F5F5F5&color=3A3D42"
                alt="Bessie"
                className="w-15 h-15 rounded-[14px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-base">
                  Bessie Cooper
                </span>
                <span className="text-[14px] text-[#7A7A7A]">Top Up</span>
              </div>
            </div>
            <span className="font-bold text-green-500 text-base">
              +Rp1.500.000
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?name=Dianne+Russell&background=F5F5F5&color=3A3D42"
                alt="Dianne"
                className="w-13 h-13 rounded-[14px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-base">
                  Dianne Russell
                </span>
                <span className="text-[14px] text-[#7A7A7A]">Transfer</span>
              </div>
            </div>
            <span className="font-bold text-green-500 text-base">
              +Rp250.000
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?name=Netflix+Sub&background=F5F5F5&color=3A3D42"
                alt="Netflix"
                className="w-13 h-13 rounded-[14px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[#3A3D42] text-[16px]">
                  Netflix
                </span>
                <span className="text-sm text-[#7A7A7A]">Subscription</span>
              </div>
            </div>
            <span className="font-bold text-[#FF5B37] text-base">
              -Rp186.000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
