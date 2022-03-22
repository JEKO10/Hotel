import price from "../images/price.png";
import fees from "../images/noFee.png";
import reservation from "../images/reservation.png";
import wifi from "../images/wifi.png";
import parking from "../images/parking.png";
import town from "../images/town.png";

function About() {
  return (
    <section className="about">
      <div>
        <img src={price} alt="IMG" />
        <p>Best price guarantee</p>
      </div>
      <div>
        <img src={fees} alt="IMG" />
        <p>No booking fees</p>
      </div>
      <div>
        <img src={reservation} alt="IMG" />
        <p>Reservation</p>
      </div>
      <div>
        <img src={wifi} alt="IMG" />
        <p>Free Wi-Fi</p>
      </div>
      <div>
        <img src={parking} alt="IMG" />
        <p>Free parking</p>
      </div>
      <div>
        <img src={town} alt="IMG" />
        <p>1.5 km from the town center</p>
      </div>
    </section>
  );
}

export default About;
