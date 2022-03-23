import price from "../images/price.png";
import fees from "../images/noFee.png";
import reservation from "../images/reservation.png";
import wifi from "../images/wifi.png";
import parking from "../images/parking.png";
import town from "../images/town.png";

function About() {
  return (
    <>
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
          <p>Instant booking confirmation</p>
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
      <div className="banner"></div>
      <section className="info">
        <p>
          This property is a 1-minute walk from the beach. Offering free WiFi,
          barbecue facilities, a garden and free private parking, Laguna Mini
          Resort offers accommodation in Tivat, 1.1 km from Belane Beach.
        </p>
        <p>
          Each unit features a kitchen with a dishwasher and a refrigerator, a
          flat-screen TV with satellite channels, ironing facilities, a work
          desk and a seating area with a sofa. All units have a private bathroom
          with a bidet, hairdryer and free toiletries.
        </p>
        <p>
          The aparthotel has a terrace. If you want to explore this area, the
          area is suitable for cycling, and the Laguna Mini Resort offers a car
          rental service. Popular attractions near the accommodation are
          Kalardovo Beach, City Beach and Church of St. Sava. The nearest
          airport is Tivat Airport, 2 km from Laguna Mini Resort.
        </p>
      </section>
    </>
  );
}

export default About;
