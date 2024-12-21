import { NavLink } from "react-router-dom";
import { useResponsive } from "../../Hooks/useVariable";
import { ChevronRight } from "lucide-react";

const NavMenu = () => {
  // responsive hook
  const { isMobile } = useResponsive();

  const navMenuArray = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Property",
      link: "/property",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];

  const navMenuOutput = navMenuArray.map((item, i) => (
    <li key={i}>
      <NavLink activeclassname="active" to={item.link}>
        <h4>{item.name}</h4>

        {isMobile && <ChevronRight />}
      </NavLink>
    </li>
  ));

  return <ul className="nav-menu-ul">{navMenuOutput}</ul>;
};

export default NavMenu;
