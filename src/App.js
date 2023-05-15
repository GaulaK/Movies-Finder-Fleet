import { useState, useEffect } from "react";

// Styles
import "./App.css";

// Components
import SearchBar from "./components/SearchBar";
import MoviesList from "./components/MoviesList";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark);

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});

  return (
    <div className="App">
      <div className="side-menu">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MoviesList movies={data} />
      </div>
    </div>
  );
}

export default App;
