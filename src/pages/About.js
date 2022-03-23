import AboutComponent from "../components/About";

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
    </section>
  );
}

export default About;
