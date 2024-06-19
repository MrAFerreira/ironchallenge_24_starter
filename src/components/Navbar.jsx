import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <h1>IronMerch</h1>
      </Link>
      <div className="nav-links">
        <Link to={"/products"}> Products</Link>
        <Link to={"/signup"}> Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
