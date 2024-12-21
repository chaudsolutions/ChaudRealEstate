import { useEffect } from "react";
import HeaderPage from "../../Custom/HeadPage/HeadPage";
import Maps from "../../Custom/Maps/Maps";
import { ContactForm } from "../../Custom/Forms/Forms";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./contact.css";
import { companyName } from "../../Hooks/useVariable";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="contact">
      <HeaderPage page="Contact Us" />

      <Maps />

      <div className="contactContainer">
        <div className="contactForm">
          <h3>Get In Touch</h3>
          <ContactForm />
        </div>

        <div className="contactInfo">
          <h4>Contact Information</h4>
          <ul className="info">
            <li>
              <MdLocationPin size={30} />
              <a href="geo:">address here</a>
            </li>
            <li>
              <MdEmail size={30} />
              <a href="mailto:email">info@{companyName}.com</a>
            </li>
            <li>
              <FaPhone size={30} />
              <a href="tel:+">1234567890</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Contact;
