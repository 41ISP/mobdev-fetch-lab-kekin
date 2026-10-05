import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MovieDetailsPage() {
   const { imdbID } = useParams();
   const [movie, setMovie] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      setError(null);
      setIsLoading(true);

      try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch (err) {
        setError('Не удалось связаться с сервером');
      } finally {
        setIsLoading(false);
      }
    }

    loadMovie();
  }, [imdbID]);

  if (isLoading) return <Loader label="Загружаем фильм…" />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  return <MovieDetails movie={movie} />
}

export default MovieDetailsPage;
