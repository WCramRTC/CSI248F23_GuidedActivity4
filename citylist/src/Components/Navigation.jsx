import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities List</Link>
          </li>
          <li>
            <Link to="/cities/create">Add City</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
