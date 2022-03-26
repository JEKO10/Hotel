import data from "../data";
import { Link, useParams } from "react-router-dom";

function SingleRoom() {
  const { id } = useParams();
  const { fields, banner, imgOne, imgTwo, imgThree } = data[id];

  return (
    <section className="singleRoom">
      <header
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
        }}
      >
        <div>
          <h1>{fields.name} room</h1>
          <div className="underline"></div>
          <Link to="/rooms">Back to Rooms</Link>
        </div>
      </header>
      <div className="gallery">
        <img src={imgOne} alt="IMG" />
        <img src={imgTwo} alt="IMG" />
        <img src={imgThree} alt="IMG" />
      </div>
      <div className="details">
        <div>
          <h1>Details</h1>
          <p>{fields.description}</p>
        </div>
        <div>
          <h1>Info</h1>
          <h3>Price: ${fields.price}</h3>
          <h3>Size: {fields.size} SQFT</h3>
          <h3>Max Capacity: {fields.capacity} People</h3>
          <h3>{fields.pets ? "Pets Allowed" : "No Pets Allowed"}</h3>
        </div>
      </div>
      <div className="extras">
        <h1>Extras</h1>
        {fields.extras.map((extra) => (
          <h3>- {extra}</h3>
        ))}
      </div>
    </section>
  );
}

export default SingleRoom;
