import { Link } from "react-router-dom";
import { MovieCardProps } from "../utlity/types/moviecard.type";
import { useState } from "react";

interface MovieFavoriteProps {
  id: string;
  title: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
}

const MovieCard = ({
  title,
  backdropPath,
  rating,
  date,
  id,
}: MovieCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;

  const year = date.toString().slice(0, 4);
  const ratings = rating.toString().slice(0, 1);

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("movieFavorite") || "[]");
    return favorites.some((fav: MovieFavoriteProps) => fav.id === id);
  });

  const addToFavorites = () => {
    let favorites: MovieFavoriteProps[] = JSON.parse(
      localStorage.getItem("movieFavorite") || "[]"
    );

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== id);
      setIsFavorite(false);
    } else {
      favorites.push({
        id,
        title,
        backdrop_path: backdropPath,
        vote_average: rating,
        release_date: date,
      });
      setIsFavorite(true);
    }

    localStorage.setItem("movieFavorite", JSON.stringify(favorites));
  };

  return (
    <section className=" ">
      <div className="max-w-[200px] w-full flex flex-col items-start justify-start gap-2 relative group cursor-pointer  group-hover:border-b-red-600 group-hover:border-b-[2px]">
        <div className="">
          <img
            src={imageUrl}
            alt="movie_image"
            className="w-[200px] h-[150px] rounded-[5px] group-hover:opacity-90  "
          />
        </div>

        <div className="flex justify-between w-full">
          <div className="w-[90px] h-[25px] flex items-center justify-center border-[1px] border-black dark:border-white">
            <h1 className="w-[40px] bg-transparent text-xs text-black dark:text-white text-center font-bold">
              4k
            </h1>
            <h1 className="w-[100px] h-full text-center pt-1 bg-black  dark:bg-white  text-xs text-white dark:text-black font-bold">
              Ultra-HD
            </h1>
          </div>

          <div
            className={`rounded-[50%] w-[30px] h-[30px] border-[3px] border-red-500 flex items-center justify-center p-3`}
          >
            <h1 className=" text-sm font-medium opacity-80  dark:text-white text-black">
              {ratings}
            </h1>
          </div>
        </div>

        <Link to={`/moviedetails/${id}`}>
          {" "}
          <h1 className="font-bold text-xl text-red-600">{title}</h1>{" "}
        </Link>
        <h1 className=" font-normal text-base text-black dark:text-white font-libre">
          {year}
        </h1>

        <div
          onClick={addToFavorites}
          className={`absolute right-3 top-2 hidden  group-hover:flex cursor-pointer  transition-all duration-300 
      transform hover:scale-110  rounded-[50%] w-[30px] h-[30px] items-center justify-center   bg-white`}
        >
          <i
            className={`ri-heart-add-2-fill ${
              isFavorite ? "text-red-700 fill-red-700" : "border-black bor"
            } font-bold text-xl `}
          ></i>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
