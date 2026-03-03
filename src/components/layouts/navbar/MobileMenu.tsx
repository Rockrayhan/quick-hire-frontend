import { useState } from "react";

import { Button } from "../../ui/button";
import clsx from "clsx";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <div className="relative md:hidden">
      {/* Menu Icon */}
      <button onClick={toggleMenu}>
        <img
          src="/mobile-menu-icon.png"
          alt="menu"
          className="w-7 h-7"
        />
      </button>

      {/* Animated Dropdown */}
      <div
        className={clsx(
          "absolute right-0 mt-4 w-56 rounded-xl border bg-white shadow-lg p-4 space-y-4 z-50 transform transition-all duration-300 ease-in-out origin-top",
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-3 font-medium">
          <NavLinks onClick={() => setOpen(false)} />
        </nav>

        <div className="border-t pt-3 space-y-2">
          <Button variant="ghost" className="w-full">
            Login
          </Button>

          <Button className="w-full bg-blue-700 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;