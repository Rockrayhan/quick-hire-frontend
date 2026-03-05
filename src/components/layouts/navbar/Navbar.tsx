import Logo from "@/components/common/logo/Logo";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layouts/navbar/MobileMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="mb-16">
      <div className="fixed top-0 w-full z-50 bg-[rgba(255,255,255,0.85)] backdrop-blur-sm  py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Logo />

              <nav className="hidden md:flex gap-6 font-medium">
                <NavLinks />
              </nav>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="admin/dashboard">
                <Button className="btn-space" variant="ghost">
                  Login
                </Button>
              </Link>

              <Link to="admin/dashboard">
                <Button className="bg-primary text-white btn-space">
                  Dashboard
                </Button>
              </Link>
            </div>

            {/* Mobile */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
