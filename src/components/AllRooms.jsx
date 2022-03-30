import { Link } from "react-router-dom";

function AllRooms({ rooms }) {
  return (
    <section className="rooms">
      {rooms.map((room) => {
        const { fields } = room;
        return (
          <div key={room.id} className="room">
            <div className="container">
              <img src={room.banner} alt="IMG" />
              <div className="price">
                <h2>${fields.price}</h2>
                <h3>per night</h3>
              </div>
              <Link to={`/room/${room.id}`}>More Info</Link>
            </div>
            <p>{fields.name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default AllRooms;
