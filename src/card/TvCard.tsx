import { Link } from "react-router-dom";
import { TvCardProps } from "../utlity/types/tvcard.type";

const TvCard = ({ name, backdropPath, rating, date, id }: TvCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;

  // const year = date.toString().slice(0,4)
  const ratings = rating.toString().slice(0, 1);
  return (
    <section className="  py-3">
      <div
        className="max-w-[180px] w-full flex flex-col items-start justify-start gap-2 relative
 group cursor-pointer  group-hover:border-b-red-600 group-hover:border-b-[2px]"
      >
        <div className="">
          <img
            src={imageUrl}
            alt="tv_image"
            className="w-[200px] h-[150px] rounded-[5px] group-hover:opacity-90  "
          />
        </div>

        <div className="flex justify-between w-full">
          <div className="w-[90px] h-[25px] flex items-center justify-center border-[1px] border-black  dark:border-white">
            <h1 className="w-[40px] bg-transparent text-xs  text-center font-bold dark:text-white">
              4k
            </h1>
            <h1 className="w-[100px] h-full text-center pt-1 bg-black text-xs text-white dark:bg-white dark:text-black font-bold">
              Ultra-HD
            </h1>
          </div>

          <div
            className={`rounded-[50%] w-[30px] h-[30px] border-[3px] border-red-500 flex items-center justify-center p-3`}
          >
            <h1 className=" text-xs font-medium opacity-80 dark:text-white">
              {ratings}
            </h1>
          </div>
        </div>
        <h1 className=" font-normal text-base text-black font-libre">{date}</h1>
        <Link to={`/moviedetails/${id}`}>
          {" "}
          <h1 className="font-bold text-base text-red-600">{name}</h1>{" "}
        </Link>
        <h1 className=" font-normal text-base text-black dark:text-white font-libre">
          {date}
        </h1>

        <div
          className=" absolute right-3 top-2 hidden  group-hover:flex cursor-pointer  transition-all duration-300 
      transform hover:scale-110 bg-white rounded-[50%] w-[30px] h-[30px] items-center justify-center "
        >
          <i className="ri-heart-add-2-fill text-red-700 font-bold text-xl "></i>
        </div>
      </div>
    </section>
  );
};

export default TvCard;
