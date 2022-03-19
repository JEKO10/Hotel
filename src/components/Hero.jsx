import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero">
      <div>
        <h1>Laguna mini resort</h1>
        <div className="underline"></div>
        <h3>Deluxe Rooms Starting At $299</h3>
        <Link to="/rooms">Our Rooms</Link>
      </div>
    </header>
  );
}

export default Hero;
