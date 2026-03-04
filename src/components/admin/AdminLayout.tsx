import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-100">

        {/* Sidebar */}
        <AdminSidebar />

        {/* Content */}
        <main className="flex-1">

          {/* Mobile Toggle */}
          <div className="p-4 border-b bg-white md:hidden">
            <SidebarTrigger />
          </div>

          <div className="p-6 md:p-10">
            <Outlet />
          </div>

        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;