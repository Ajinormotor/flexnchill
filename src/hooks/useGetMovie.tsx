import { useEffect, useState } from "react";

type Movie = {
  id: string;
  title: string;
  first_air_date: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
};

const useGetMovie = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEM_PER_PAGE = 8;
  const firstIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const lastIndex = firstIndex + ITEM_PER_PAGE;
  const realmovies = movies.slice(firstIndex, lastIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);

      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );

        if (!res.ok) {
          throw new Error("Data not fetched");
        }

        const data = await res.json();
        // console.log(data);
        setMovies(data.results);
        setErrors(false);
      } catch (error) {
        console.error(error);
        setErrors(true);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, []);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searcTerm = e.target.value.toLowerCase();

    setMovies((prevMovies) =>
      prevMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searcTerm)
      )
    );
  };
  return {
    loading,
    errors,
    movies,
    ITEM_PER_PAGE,
    paginate,
    currentPage,
    realmovies,
    handleSearchInput,
  };
};

export default useGetMovie;
