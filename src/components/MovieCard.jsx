function MovieCard({ movie }) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <img
        src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : '/no-movie.png'}
        alt={movie.title}
      />

      <div className="mt-4">
        <h3>{movie.title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{movie.vote_average}</p>
          </div>

          <span>•</span>
          <p className="lang">{movie.original_language.toUpperCase()}</p>

          <span>•</span>
          <p className="year">{movie.release_date.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
