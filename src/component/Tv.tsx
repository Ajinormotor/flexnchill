import Slider from "react-slick";
import useGetTv from "../hooks/useGetTv";
import TvCard from "../card/TvCard";

const Tv = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.1,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const { tv } = useGetTv();

  return (

    <section className=" md:px-4 py-3 md:py-0 md:p-[10px] flex flex-col gap-[10px] overflow-x-hidden
      dark:bg-black bg-white border-b-[2px] dark:border-white">
      {/* Heading */}
      <div className="border-l-[4px] rounded-sm border-red-700 px-3  ">
        <h1 className=" font-bold text-4xl  text-black dark:text-white font-libre">
          Latest tv series
        </h1>
      </div>

      <div className="  max-w-[1400px] py-4 w-[99%] md:pl-3  md:mt-[3rem] gap-2">
        <Slider {...settings}>
          {tv.map((t) => (
            <div key={t.id} className="">
              <TvCard
                id={t.id}
                name={t.name}
                backdropPath={t.backdrop_path}
                rating={t.vote_average}
                date={t.release_date}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Tv;
