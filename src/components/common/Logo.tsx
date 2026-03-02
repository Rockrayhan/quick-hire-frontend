import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="QuickHire Logo" className="w-8 h-8" />

      <span className="text-xl font-bold font-heading">
        QuickHire
      </span>
    </Link>
  );
};

export default Logo;