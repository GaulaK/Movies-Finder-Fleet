import { useState, useEffect } from "react";
import axios from "axios";

// import fakeDatas from "./data/movies.json";

// Styles
import "./App.css";
import gitHubLogo from "./assets/img/github-mark-white.png";

// Components
import SearchBar from "./components/SearchBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import PlaceHolder from "./components/Placeholder";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faUser,
  faHourglass,
  faCalendarDays,
  faStar,
  faFilm,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faXmark,
  faUser,
  faHourglass,
  faCalendarDays,
  faStar,
  faFilm,
  faClapperboard
);

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  //  Get movies list who contains the query of input
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=88c5a19f4a328426dd5694b0f06eb4a6&language=fr-FR&page=1&include_adult=false&query=${searchQuery}`
          );
          setData(response.data);
        } else {
          // By default, display Trendings movies (choose by the API)
          const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=88c5a19f4a328426dd5694b0f06eb4a6`
          );
          setData(response.data);
        }
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
        <div className="separator"></div>
        <div className="logo-github-container">
          <a href="https://github.com/GaulaK/Movies-Finder-Fleet">
            <img alt="logo GitHub" src={gitHubLogo} />
          </a>
        </div>
      </div>
      <div className="main-content">
        {selectedMovie ? (
          <MovieDetails selectedMovie={selectedMovie} />
        ) : (
          <PlaceHolder />
        )}
      </div>
    </div>
  );
}

export default App;
