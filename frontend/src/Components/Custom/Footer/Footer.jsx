import "./footer.css";
import Socials from "./Socials";
import { companyName } from "../../Hooks/useVariable";
import { Link } from "react-router-dom";
import { Logo } from "../Nav/Nav";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <Logo />

          <ul>
            <li>Help</li>
            <li>
              <Link to="/frequently-asked-questions">FAQ</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy-Policy</Link>
            </li>
          </ul>
          <ul>
            <li>{companyName}</li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="line"></div>

      <div>
        <Socials />

        <p>
          Copyright © 2024, {companyName}.com
          <br />
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
