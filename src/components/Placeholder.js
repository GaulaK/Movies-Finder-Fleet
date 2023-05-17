import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/styles/PlaceHolder.css";
const PlaceHolder = () => {
  return (
    <div className="placeholder-content">
      <FontAwesomeIcon icon="fa-solid fa-clapperboard" />
      <p className="baseline-no-selection">Commencez par rechercher un film</p>
    </div>
  );
};

export default PlaceHolder;
