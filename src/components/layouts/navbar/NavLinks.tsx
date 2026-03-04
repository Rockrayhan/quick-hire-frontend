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

      <Link to="/all-jobs" onClick={onClick}>
        Browse Jobs
      </Link>
    </>
  );
};

export default NavLinks;