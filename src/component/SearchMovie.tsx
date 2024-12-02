import useGetMovie from "../hooks/useGetMovie";

const SearchMovie = () => {
  const { movies, handleSearchInput } = useGetMovie();

  return (
    <section className="w-full h-screen z-40">
      <div
        className="w-full  flex flex-col items-center
     justify-center absolute left-0 top-[70px] z-40 "
      >
        <div className="shadow-md w-[90%] md:h-[50px]  rounded-[10px] border-b-[1px] border-black">
          <input
            type="text"
            placeholder="Search......"
            onChange={handleSearchInput}
            className="w-full h-full outline-none rounded-sm p-3 border-none"
          />
        </div>

        {/* search result */}

        {movies.map((s) => (
          <div
            key={s.id}
            className="shadow-sm w-[90%] p-5  bh-screen md:h-[50px] flex items-center justify-start  bg-white "
          >
            <div className="flex gap-4 items-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${s.backdrop_path}`}
                alt="movie_pics"
                className="w-[40px] h-[40px] "
              />
              <h1>{s.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchMovie;
