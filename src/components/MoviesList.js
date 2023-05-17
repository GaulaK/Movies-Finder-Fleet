//  Styles
import "../assets/styles/MoviesList.css";

const MoviesList = ({ movies, handleUpdateSelectedMovie }) => {
  // console.log(movies);
  return (
    <ul className="movies-list">
      {movies.results
        ? movies.results.map((movie, index) => {
            return (
              <li
                key={movie.id}
                onClick={() => {
                  handleUpdateSelectedMovie(movie);
                }}
              >
                {movie.title}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default MoviesList;
