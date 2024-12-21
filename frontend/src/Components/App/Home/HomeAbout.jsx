import { LinkOne } from "../../Custom/Buttons/LinkBtn";

const HomeAbout = () => {
  return (
    <section className="homeAbout">
      <h2>About Us</h2>
      <p>
        We are a real estate firm with over 20 years of expertise, and our main
        goal is to provide amazing locations to our partners.
        <LinkOne linkDetails={[{ name: "Learn More", url: "/about-us" }]} />
      </p>
    </section>
  );
};

export default HomeAbout;
