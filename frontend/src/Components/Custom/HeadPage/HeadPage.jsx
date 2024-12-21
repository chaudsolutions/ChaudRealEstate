import "./headPage.css";
import PropTypes from "prop-types";

const HeaderPage = ({ page }) => {
  return (
    <div className="head-page">
      <h1>{page}</h1>
    </div>
  );
};

HeaderPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default HeaderPage;
