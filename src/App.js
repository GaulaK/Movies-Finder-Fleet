import { useState, useEffect } from "react";
import axios from "axios";

// import fakeDatas from "./data/movies.json";

// Styles
import "./App.css";

// Components
import SearchBar from "./components/SearchBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark);

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  //  Get movies list who contains the query of input
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=88c5a19f4a328426dd5694b0f06eb4a6&language=fr-FR&page=1&include_adult=false&query=${searchQuery}`
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchQuery]);

  // Get all details when user click on movie
  const handleUpdateSelectedMovie = async (movie) => {
    if (movie) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=88c5a19f4a328426dd5694b0f06eb4a6&language=fr-FR`
        );
        // console.log(response.data);
        setSelectedMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // console.log(selectedMovie);

  return (
    <div className="App">
      <div className="side-menu">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {/* Change by data state */}

        <MoviesList
          movies={data}
          handleUpdateSelectedMovie={handleUpdateSelectedMovie}
        />
      </div>
      <div className="main-content">
        {selectedMovie && <MovieDetails selectedMovie={selectedMovie} />}
      </div>
    </div>
  );
}

export default App;
