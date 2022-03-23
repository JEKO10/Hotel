import AboutComponent from "../components/About";
import Footer from "../components/Footer";

function About() {
  return (
    <section className="aboutPage">
      <header className="hero">
        <div>
          <h1>About Us</h1>
          <div className="underline"></div>
        </div>
      </header>
      <AboutComponent />
      <Footer />
    </section>
  );
}

export default About;
