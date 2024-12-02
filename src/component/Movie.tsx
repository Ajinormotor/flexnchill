import useGetMovie from "../hooks/useGetMovie";
import MovieCard from "../card/MovieCard";
import MoviesPagination from "./MoviesPagination";

const Movie = () => {
  const { movies, ITEM_PER_PAGE, paginate, realmovies, currentPage } =
    useGetMovie();

  return (
    <section className=" md:px-4 p-[10px] border-b-[1px] dark:border-white py-8 flex flex-col gap-[20px] overflow-x-hidden dark:bg-black bg-white">
      {/* Heading */}
      <div className="border-l-[4px] rounded-sm border-red-700 px-3">
        <h1 className=" font-bold text-4xl  text-black dark:text-white font-libre">
          Latest movies
        </h1>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 max-w-[1400px] w-full justify-items-center  gap-4 md:gap-2">
          {realmovies.map((m) => (
            <div key={m.id} className="">
              <MovieCard
           id={String(m.id)}  
                title={m.title}
                backdropPath={m.backdrop_path}
                rating={m.vote_average}
                date={m.release_date}
              />
            </div>
          ))}
        </div>

        <div className="">
          <MoviesPagination
            itemPerPage={ITEM_PER_PAGE}
            currentPage={currentPage}
            data={movies.length}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default Movie;
