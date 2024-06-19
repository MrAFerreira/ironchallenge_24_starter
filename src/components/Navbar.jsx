import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    <nav>
      <Link to={"/"}>
        <h1>IronMerch</h1>
      </Link>
      {user ? <p>Welcome, {user.name}</p> : <Link to={"/signup"}>Signup</Link>}
      <div className="nav-links">
        <Link to={"/products"}> Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
