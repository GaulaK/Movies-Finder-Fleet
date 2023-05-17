import "../assets/styles/MovieDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = ({ selectedMovie }) => {
  console.log(selectedMovie);

  const durationInHour = (duration) => {
    let str = "";

    if (duration > 60) {
      str += `${Math.floor(duration / 60)}h`;
      duration = duration % 60;
    }

    str += `${duration}min`;

    return str;
  };
  return (
    <div>
      <div className="main-movie-content">
        <div className="movie-information">
          <div>
            <h2>{selectedMovie.title}</h2>
          </div>

          {selectedMovie.genres && (
            <p className="genres-movies">
              {selectedMovie.genres.map((genre, index) => {
                if (index) {
                  return `, ${genre.name}`;
                } else {
                  return genre.name;
                }
              })}
            </p>
          )}

          <div className="movie-details">
            <div className="duration">
              <div className="icon-container">
                <FontAwesomeIcon icon="fa-solid fa-hourglass" />
              </div>

              <span>{durationInHour(selectedMovie.runtime)}</span>
            </div>
            <div className="release-date">
              <div className="icon-container">
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
              </div>

              <span>{selectedMovie.release_date}</span>
            </div>
            <div className="vote">
              <div className="icon-container">
                <FontAwesomeIcon icon="fa-solid fa-star" />
              </div>
              <span>{selectedMovie.vote_average.toFixed(1)}/10</span>
            </div>
          </div>
          {selectedMovie.production_companies.length ? (
            <>
              <h3>Production</h3>
              <p>
                {selectedMovie.production_companies.map((production, index) => {
                  if (index) {
                    return `, ${production.name}`;
                  } else {
                    return production.name;
                  }
                })}
              </p>
            </>
          ) : null}
        </div>

        <div className="poster-container">
          {selectedMovie.poster_path ? (
            <img
              alt={`Affiche ${selectedMovie.title}`}
              src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
            />
          ) : (
            <div className="empty-poster">
              <FontAwesomeIcon icon="fa-solid fa-film" />
              <span>Pas d'affiche disponible</span>
            </div>
          )}
        </div>
      </div>
      {selectedMovie.overview ? (
        <>
          <h2>Synopsis</h2>
          <p className="movie-overview">{selectedMovie.overview}</p>
        </>
      ) : null}
    </div>
  );
};

export default MovieDetails;
