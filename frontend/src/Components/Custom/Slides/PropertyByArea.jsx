import { Link } from "react-router-dom";

const PropertyByArea = () => {
  const areas = [];

  const areasList = areas.map((area) => (
    <li key={area._id}>
      <Link to={`/property/${area}`}>
        <h4>{area}</h4>
        <p>0</p>
      </Link>
    </li>
  ));

  return <ul>{areasList}</ul>;
};

export default PropertyByArea;
