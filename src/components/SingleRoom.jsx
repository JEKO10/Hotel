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
          <ul>
            <li>
              <span>Price: </span> ${fields.price}
            </li>
            <li>
              <span>Size: </span> {fields.size} SQFT
            </li>
            <li>
              <span>Max Capacity: </span> {fields.capacity} People
            </li>
            <li>{fields.pets ? "Pets Allowed" : "No Pets Allowed"}</li>
          </ul>
        </div>
      </div>
      <div className="extras">
        <h1>Extras</h1>
        <ul>
          {fields.extras.map((extra) => (
            <li key={extra}>- {extra}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SingleRoom;
