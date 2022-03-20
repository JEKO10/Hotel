import { Link } from "react-router-dom";
import double from "../images/room-1.jpeg";
import family from "../images/room-12.jpeg";
import presidential from "../images/details-1.jpeg";

function Featured() {
  return (
    <section className="featured">
      <h1>Featured Rooms</h1>
      <div className="underline"></div>
      <div className="container">
        <div className="double">
          <img src={double} alt="IMG" />
        </div>
        <div className="family">
          <img src={family} alt="IMG" />
        </div>
        <div className="presidential">
          <img src={presidential} alt="IMG" />
        </div>
      </div>
    </section>
  );
}

export default Featured;
