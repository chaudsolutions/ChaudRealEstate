import { useEffect } from "react";
import Search from "../../Custom/Search/Search";
import PropertyByArea from "../../Custom/Slides/PropertyByArea";
import PropertySlide from "../../Custom/Slides/PropertySlide";
import "./home.css";
import HomeAbout from "./HomeAbout";
import { ContactForm } from "../../Custom/Forms/Forms";
import { CountUpComponent } from "../../Custom/Count/CountUp";
import Reviews from "../../Custom/Reviews/Reviews";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="home">
      <header>
        <h1>Find Your Dream Home</h1>
        <p>
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
      </header>

      <CountUpComponent />

      <HomeAbout />

      <section className="section-one">
        <Search />
      </section>

      <section className="section-three">
        <div>
          <h2>Latest Properties</h2>
          <p>These are the latest properties posted recently.</p>
        </div>

        <PropertySlide />
      </section>

      <section className="section-three">
        <div>
          <h2>Property By Area</h2>
          <p>Available Properties by Area</p>
        </div>

        <PropertyByArea />
      </section>

      <Reviews />

      <section className="section-five">
        <div>
          <h2>Contact Us</h2>
          <p>
            We are here to help you find your perfect home. Contact us today and
            we&apos;ll be happy to assist you.
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
};

export default Home;
