import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
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
            <Button variant="ghost">Login</Button>

            <Button className="bg-blue-700 text-white">Sign Up</Button>
          </div>

          {/* Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
