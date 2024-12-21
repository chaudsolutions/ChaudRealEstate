import "./socials.css";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Socials = () => {
  // socials
  const socials = [
    {
      icon: <Instagram size={15} />,
      link: "",
    },
    {
      icon: <Facebook size={15} />,
      link: "",
    },
    {
      icon: <Twitter size={15} />,
      link: "",
    },
  ];

  const socialsOutput = socials.map((item, i) => (
    <li key={i}>
      <a href={item.link}>{item.icon}</a>
    </li>
  ));

  return <ul className="socials">{socialsOutput}</ul>;
};

export default Socials;
