import FavoritesCard from "../card/FavoritesCard";

interface FavoriteProps {
  id: string;
  title: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
}

const Favorites = () => {
  const favorites: FavoriteProps[] = JSON.parse(
    localStorage.getItem("movieFavorite") || "[]"
  );
  return (
    <section className="flexflex-col gap-4 p-[10px] my-2">
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full">
          {favorites.map((fav: FavoriteProps) => (
            <div className="">
              <FavoritesCard
                id={fav.id}
                title={fav.title}
                backdropPath={fav.backdrop_path}
                rating={fav.vote_average}
                date={fav.release_date}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className=" my-3">
          <h1 className="text-3xl text-center text-black">
            No Favorited added
          </h1>
        </div>
      )}

      <h1></h1>
    </section>
  );
};

export default Favorites;
