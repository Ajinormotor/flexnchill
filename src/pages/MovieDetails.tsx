import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SingleMovie = {
  id: number;
  title: string;
  first_air_date?: string; // Optional for TV shows
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date?: string; // Optional for movies
};

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [singleMovie, setSingleMovie] = useState<SingleMovie | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = "7c1622b8e9c0b5b97fee3187ec32a5bf";
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch movie details.");
        }

        const data = await res.json();
        setSingleMovie(data); 
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    if (id) getMovie();
  }, [id]);

  return (
    <section className="p-4">
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {singleMovie && (
        <div className="flex flex-col items-start w-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${singleMovie.backdrop_path}`}
            alt={singleMovie.title}
            className="w-full max-w-full h rounded-sm"
          />
          <h1 className="text-2xl md:text-4xl font-bold mt-4">{singleMovie.title}</h1>
          <p className="text-sm text-gray-500">
            {singleMovie.release_date || singleMovie.first_air_date}
          </p>
          <p className="mt-4">{singleMovie.overview}</p>
          <div className="mt-2">
            <span className="text-lg font-semibold">Rating: </span>
            {singleMovie.vote_average.toFixed(1)}
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetails;
