import { IoMdChatboxes } from "react-icons/io";
import { BiDollarCircle } from "react-icons/bi";
import { MdRealEstateAgent } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import propertyValuationImage from "../../../assets/whyUs/propertyValuation.jpg";
import propertyManagementImage from "../../../assets/whyUs/propertyManagement.jpg";
import propertyInvestmentImage from "../../../assets/whyUs/propertyInvestment.png";
import "./reviews.css";
import { LinkOne } from "../Buttons/LinkBtn";

const WhyChooseUs = () => {
  const itemsArray = [
    {
      icon: <BiDollarCircle size={100} />,
      title: "Property Valuation",
      description:
        "We offer high-quality properties that meet the needs and preferences of our clients.",
      image: propertyValuationImage,
    },
    {
      icon: <MdRealEstateAgent size={100} />,
      title: "Property Management",
      description:
        "Generous amounts of south facing glazing maximize the solar gains for most of the year.",
      image: propertyManagementImage,
    },
    {
      icon: <FaBriefcase size={100} />,
      title: "Investment Opportunities",
      description:
        "All-inclusive real estate services to facilitate the easy management of your properties.",
      image: propertyInvestmentImage,
    },
  ];

  const itemsOutput = itemsArray.map((item, i) => (
    <li key={i}>
      {item.icon}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} height={200} width={350} />
    </li>
  ));

  return (
    <div className="whyUs">
      <div>
        <h2>Why Choose Us</h2>
        <IoMdChatboxes size={50} />
        <p>
          We are a real estate firm with over 20 years of expertise, and our
          main goal is to provide amazing locations to our partners and clients.
          Within the luxury real estate market, our agency offers customized
          solutions.
        </p>
        <LinkOne linkDetails={[{ name: "Contact Us", url: "/contact-us" }]} />
      </div>

      <ul>{itemsOutput}</ul>
    </div>
  );
};

export default WhyChooseUs;
