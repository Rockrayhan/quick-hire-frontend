import { Link } from "react-router-dom";

type NavLinksProps = {
  onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
  return (
    <>
      <Link to="/" onClick={onClick}>
        Home
      </Link>

      <Link to="/about" onClick={onClick}>
        Browse Companies
      </Link>
    </>
  );
};

export default NavLinks;