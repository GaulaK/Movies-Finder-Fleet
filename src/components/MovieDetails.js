import "../assets/styles/MovieDetails.css";

const MovieDetails = ({ selectedMovie }) => {
  console.log(selectedMovie);
  return (
    <div>
      <div className="movie-informations">
        <div>
          <h2>{selectedMovie.title}</h2>
          <h3>Genres</h3>
          {selectedMovie.genres && (
            <ul className="gendres-movies">
              {selectedMovie.genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          )}
        </div>
        <div>
          <div className="poster-container">
            <img
              alt={`Affiche ${selectedMovie.title}`}
              src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
            />
          </div>
        </div>
      </div>
      <p>{selectedMovie.overview}</p>
    </div>
  );
};

export default MovieDetails;
