import { Link } from "react-router-dom";
import { FavoritesCardProps } from "../utlity/types/favoritescard.type";

const FavoritesCard = ({
  title,
  backdropPath,
  rating,
  date,
  id,
}: FavoritesCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;

  const year = date.toString().slice(0, 4);
  const ratings = rating.toString().slice(0, 1);

  return (
    <section className=" ">
      <div className="md:max-w-[200px] w-full flex flex-col md:items-start justify-start gap-2 relative group cursor-pointer p-3 md:p-2  group-hover:border-b-red-600 group-hover:border-b-[2px]">
        <div className="">
          <img
            src={imageUrl}
            alt="movie_image"
            className="md::w-[200px] w-full h-[150px] rounded-[5px] group-hover:opacity-90  "
          />
        </div>

        <div className="flex justify-between w-full">
          <div className="w-[90px] h-[25px] flex items-center justify-center border-[1px] border-black">
            <h1 className="w-[40px] bg-transparent text-xs  text-center font-bold">
              4k
            </h1>
            <h1 className="w-[100px] h-full text-center pt-1 bg-black text-xs text-white font-bold">
              Ultra-HD
            </h1>
          </div>

          <div
            className={`rounded-[50%] w-[30px] h-[30px] border-[3px] border-red-500 flex items-center justify-center p-3`}
          >
            <h1 className=" text-sm font-medium opacity-80">{ratings}</h1>
          </div>
        </div>

        <Link to={`/moviedetails/${id}`}>
          {" "}
          <h1 className="font-bold text-xl text-red-600">{title}</h1>{" "}
        </Link>
        <h1 className=" font-normal text-base text-black font-libre">{year}</h1>

        {/* <div className={`absolute right-3 top-2 hidden  group-hover:flex cursor-pointer  transition-all duration-300 
      transform hover:scale-110  rounded-[50%] w-[30px] h-[30px] items-center justify-center   ${isFavorties? "bg-red-700" : "bg-white"}`}>
      <i className={`ri-heart-add-2-fill ${isFavorties? "text-red-700" : "text-white"} font-bold text-xl `}></i>
      </div>
  */}
      </div>
    </section>
  );
};

export default FavoritesCard;
