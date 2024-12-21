import PropTypes from "prop-types";
import NavMenu from "./NavMenu";
import Logout from "../Buttons/Logout";
import { useAuthContext } from "../../Context/AuthContext";
import { LinkOne, LinkTwo } from "../Buttons/LinkBtn";

const NavSlide = ({ navFunc }) => {
  const { isNavActive } = navFunc[0];

  return (
    <div className={`navSlide ${isNavActive ? "activeNav" : ""}`}>
      <NavMenu />
    </div>
  );
};

export const AuthContainer = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div className="auth-btn">
        {user ? (
          <Logout />
        ) : (
          <>
            <LinkOne linkDetails={[{ name: "Register", url: "/register" }]} />
            <LinkTwo linkDetails={[{ name: "Login", url: "/login" }]} />
          </>
        )}
      </div>
    </>
  );
};

AuthContainer.propTypes = {
  userProp: PropTypes.array,
};

NavSlide.propTypes = {
  navFunc: PropTypes.array.isRequired,
};

export default NavSlide;
