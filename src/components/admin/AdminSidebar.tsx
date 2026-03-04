import { LayoutDashboard, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";

const AdminSidebar = () => {
  return (
    <Sidebar className="mt-16">
      {/* Header */}
      <SidebarHeader>
        <h2 className="text-lg font-bold px-2">
          Admin Panel
        </h2>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>

              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/admin/dashboard">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Manage Jobs */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/admin/manage-jobs">
                    <Briefcase size={18} />
                    Manage Jobs
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="px-3 text-sm text-muted-foreground">
        QuickHire Admin
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;