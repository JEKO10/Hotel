import { useState } from "react";
import { Link } from "react-router-dom";
import AllRooms from "../components/AllRooms";
import Filters from "../components/Filters";
import data from "../data";

function Rooms() {
  const [rooms, setRooms] = useState(data);

  return (
    <section className="roomsPage">
      <header className="hero">
        <div>
          <h1>Our Rooms</h1>
          <div className="underline"></div>
          <Link to="/">Back Home</Link>
        </div>
      </header>
      <Filters rooms={rooms} setRooms={setRooms} />
      <AllRooms rooms={rooms} />
    </section>
  );
}

export default Rooms;
