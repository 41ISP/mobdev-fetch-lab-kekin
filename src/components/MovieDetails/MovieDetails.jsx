import { Link } from 'react-router-dom';
import RatingBadge from '../RatingBadge/RatingBadge';
import './MovieDetails.css';

function MovieDetails({movie}) {
    const { Title, Year, Poster, Plot, Director, Actors, Genre, Ratings } = movie;
  return (
     <article className="movie-details">
      <Link to="/" className="movie-details__back">← Назад</Link>

      <div className="movie-details__head">
        {Poster && Poster !== 'N/A' ? (
          <img className="movie-details__poster" src={Poster} alt={Title} />
        ) : (
          <div className="movie-details__poster movie-details__poster--empty">
            Постер отсутствует
          </div>
        )}

        <div className="movie-details__info">
          <h1 className="movie-details__title">{Title}</h1>
          <p className="movie-details__meta">{Year} · {Genre}</p>
          <p className="movie-details__plot">{Plot}</p>
          <p className="movie-details__row"><strong>Режиссёр:</strong> {Director}</p>
          <p className="movie-details__row"><strong>В ролях:</strong> {Actors}</p>

          <div className="movie-details__ratings">
            {Ratings?.map((rating) => (
              <RatingBadge
                key={rating.Source}
                source={rating.Source}
                value={rating.Value}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default MovieDetails;
