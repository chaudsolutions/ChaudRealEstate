import logo from "/logo.png";
import { Menu } from "lucide-react";
import "./nav.css";
import { useEffect, useState } from "react";
import NavSlide from "./NavSlide";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { companyName, useResponsive } from "../../Hooks/useVariable";

const Nav = () => {
  // responsive hook
  const { isMobile } = useResponsive();

  const navigate = useNavigate();

  // states
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const closeNav = (e) => {
      if (
        isNavActive &&
        !e.target.closest(".navBtn") &&
        !e.target.closest(".dp-toggle")
      ) {
        setIsNavActive(false);
      }
    };
    window.addEventListener("click", closeNav);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", closeNav);
    };
  }, [isNavActive]); // Add dependencies to effect

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        document.body.classList.add("scroll");
      } else {
        document.body.classList.remove("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="nav">
        <div>
          <Logo navigate={navigate} name={companyName} />
        </div>

        {isMobile ? (
          <Menu
            size={30}
            onClick={() => setIsNavActive(!isNavActive)}
            className="navBtn"
          />
        ) : (
          <NavMenu />
        )}

        {/* nav slider */}
        {isMobile && <NavSlide navFunc={[{ isNavActive }]} />}
      </div>
    </>
  );
};

export const Logo = ({ navigate, name }) => {
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="logo-contain" onClick={goHome}>
      <img src={logo} alt="logo" />
      {name && <span>{name}</span>}
    </div>
  );
};

Logo.propTypes = {
  navigate: PropTypes.func,
  name: PropTypes.string,
};

export default Nav;
