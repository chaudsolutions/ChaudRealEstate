import HeadPage from "../../Custom/HeadPage/HeadPage";
import HouseOne from "../../../assets/about/one.jpg";
import HouseTwo from "../../../assets/about/two.jpg";
import { useEffect } from "react";
import { CountUpComponent } from "../../Custom/Count/CountUp";
import "./about.css";
import Reviews from "../../Custom/Reviews/Reviews";
import WhyChooseUs from "../../Custom/Reviews/WhyChooseUs";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="about">
      <HeadPage page="About" />

      <div className="aboutTop">
        <div>
          <h2>Vision and Mission</h2>
          <p>
            You are the center of our process. Your needs, your wants, and your
            goals. We actively listen, always keep it even keel — never rushing
            you or pushing something you don’t need. Full transparency is our
            goal. We stay connected while building your home, clearly outlining
            next steps and collaborating with you to select personal design
            details. From day one, your peace of mind is our highest priority.
          </p>
        </div>
        <img src={HouseOne} alt="house" height={150} width={350} />
        <img src={HouseTwo} alt="house" height={150} width={350} />
        <div>
          <p>
            We design homes for how people live. Centered Design is our
            philosophy, our approach to creating spaces that energize and
            inspire.
          </p>
          <p>
            Our floor plan designs focus on three elements: natural light,
            color, and clean air all qualities that support your wellbeing and
            energy levels. When you walk into our homes, you’ll see design that
            puts people first, and more importantly, you’ll feel it.
          </p>
        </div>
      </div>

      <Reviews />

      <WhyChooseUs />

      <CountUpComponent />
    </div>
  );
};

export default About;
