import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Laguna Mini Resort</h1>
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
