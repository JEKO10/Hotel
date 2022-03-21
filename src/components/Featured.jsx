import { Link } from "react-router-dom";
import double from "../images/room-8.jpeg";
import family from "../images/room-12.jpeg";
import presidential from "../images/details-1.jpeg";

function Featured() {
  return (
    <section className="featured">
      <h1>Featured Rooms</h1>
      <div className="underline"></div>
      <div>
        <div>
          <div className="container">
            <img src={double} alt="IMG" />
            <div className="price">
              <h2>$400</h2>
              <h3>per night</h3>
            </div>
            <Link to="/rooms">Features</Link>
          </div>
          <p>Double Deluxe</p>
        </div>
        <div>
          <div className="container">
            <img src={family} alt="IMG" />
            <div className="price">
              <h2>$500</h2>
              <h3>per night</h3>
            </div>
            <Link to="/rooms">Features</Link>
          </div>
          <p>Family Deluxe</p>
        </div>
        <div>
          <div className="container">
            <img src={presidential} alt="IMG" />
            <div className="price">
              <h2>$600</h2>
              <h3>per night</h3>
            </div>
            <Link to="/rooms">Features</Link>
          </div>
          <p>Presidential</p>
        </div>
      </div>
    </section>
  );
}

export default Featured;
