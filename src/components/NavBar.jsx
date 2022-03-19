import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Laguna Mini Resort</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
