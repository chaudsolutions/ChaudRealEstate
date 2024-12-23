import { useNavigate } from "react-router-dom";
import "./notfound.css";
import Null from "../../Animations/Null";
import { useEffect } from "react";
import HeaderPage from "../../Custom/HeadPage/HeadPage";

const NotFound = () => {
  // scroll up
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderPage page="Page Not Found" />

      <div className="not-found">
        <Null />

        <div>
          <p>Sorry, the page you are looking for does not exist.</p>

          <button onClick={goHome}>Go back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
