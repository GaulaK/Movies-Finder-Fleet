//  Styles
import "../assets/styles/SearchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputUpdate = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleInputReset = () => {
    setSearchQuery("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un film"
        value={searchQuery}
        onChange={handleInputUpdate}
      />
      <div className="cross-container" onClick={handleInputReset}>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </div>
    </div>
  );
};

export default SearchBar;
