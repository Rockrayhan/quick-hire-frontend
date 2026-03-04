import { LayoutDashboard, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition hover:bg-primary hover:text-white";

  return (
    <aside className="hidden md:flex w-64 bg-white border-r flex-col p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-primary text-white" : ""
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/jobs"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-primary text-white" : ""
            }`
          }
        >
          <Briefcase size={18} />
          Manage Jobs
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;