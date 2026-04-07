import { useLocation, useNavigate } from "react-router";
import { SidebarItem } from "./SidebarItem";
import { clearSession } from "../../utils/storage";

import iconDashboard from "../../assets/icons/dashboard-two.svg";
import iconTransfer from "../../assets/icons/Send.svg";
import iconHistory from "../../assets/icons/u_user-check.svg";
import iconTopUp from "../../assets/icons/Upload.svg";
import iconProfile from "../../assets/icons/2 User.svg";
import iconLogout from "../../assets/icons/Log Out.svg";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: iconDashboard },
    { path: "/dashboard/transfer", label: "Transfer", icon: iconTransfer },
    { path: "/dashboard/history", label: "History", icon: iconHistory },
    { path: "/dashboard/topup", label: "Top Up", icon: iconTopUp },
    { path: "/dashboard/profile", label: "Profile", icon: iconProfile },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    clearSession();
    navigate("/login");
  };

  return (
    <div className="flex flex-col bg-white border-r border-[#E5E5E5] w-63.75 h-full pt-6 pb-6 px-5">
      <nav className="flex flex-col gap-3.75">
        {menuItems.map((menu, index) => (
          <SidebarItem
            key={index}
            to={menu.path}
            icon={menu.icon}
            label={menu.label}
            isActive={location.pathname === menu.path}
          />
        ))}

        <SidebarItem
          to="#"
          icon={iconLogout}
          label="Keluar"
          onClick={handleLogout}
          isDanger={true}
        />
      </nav>
    </div>
  );
};
