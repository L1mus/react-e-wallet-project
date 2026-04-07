import { Outlet } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "../components/ui/Sidebar";

export const DashboardLayout = ({ user }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header variant="dashboard" user={user} />

      <div className="flex-1 w-full mx-auto flex flex-col lg:flex-row items-stretch">
        <aside className="w-65.5 shrink-0 hidden lg:block bg-white">
          <Sidebar />
        </aside>

        <main className="flex-1 p-8 lg:px-15 lg:py-10 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
