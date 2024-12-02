import { useEffect, useState } from "react";

type Tv = {
  id: string;
  name: string;
  first_air_date: string;
  backdrop_path: string;
  vote_average: number;
  release_date: number;
};

const useGetTv = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [tv, setTv] = useState<Tv[]>([]);

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);

      try {
        const apiKey = import.meta.env.VITE_API_KEY;

        const res = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`
        );

        if (!res.ok) {
          throw new Error("Data not fetched");
        }

        const data = await res.json();
        setTv(data.results);
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

  return {
    loading,
    errors,
    tv,
  };
};

export default useGetTv;
