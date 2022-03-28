import { Link } from "react-router-dom";
import AllRooms from "../components/AllRooms";
import Filters from "../components/Filters";

function Rooms() {
  return (
    <section className="roomsPage">
      <header className="hero">
        <div>
          <h1>Our Rooms</h1>
          <div className="underline"></div>
          <Link to="/">Back Home</Link>
        </div>
      </header>
      <Filters />
      <AllRooms />
    </section>
  );
}

export default Rooms;
