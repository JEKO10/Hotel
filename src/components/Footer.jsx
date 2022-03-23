import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <a href="">Laguna Mini Resort</a>
        <div>
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/about">About us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
