
import { Link, NavLink } from "react-router-dom";
import SearchMovie from "../component/SearchMovie";

import useHeader from "./useHeader";




const Header = () => {

const {nav_link, search , sideMenu, 
  toggleTheme, isDarkMode , handleSearch ,handleSideMenu, searchRef, headerRef

} = useHeader();





  return (
    <section ref={headerRef} className="w-full lg:flex h-0 md:h-[14vh] hidden dark:bg-black bg-white shadow-sm">

      {search && <div className="bg-black opacity-40 fixed inset-0 z-30"></div>}

      <div className="lg:flex hidden items-center justify-between w-full p-3 z-10">
        <div>
          <ul className="flex gap-2">
            {nav_link.map((n) => (
              <NavLink key={n.id} to={n.path} className=" dark:text-white">
                {n.display}
              </NavLink>
            ))}
          </ul>
        </div>

        <Link to="/" className="flex items-center">
          <i className="ri-tv-2-fill text-3xl dark:text-white"></i>
          <h1 className="font-semibold text-4xl flex gap-1 text-black dark:text-white font-libre">
            Flex &<span className="text-red-400">Chill</span>
          </h1>
        </Link>

        <div className="flex gap-2">
          
          {/* Dark mode toggle */}
          <div onClick={toggleTheme} className="cursor-pointer flex items-center gap-1">
            {isDarkMode ? (
              <i className="ri-sun-foggy-fill text-yellow-400 text-xl"></i>
            ) : (
              <i className="ri-moon-clear-fill text-gray-700 text-xl"></i>
            )}
            <span className="hidden hover:block">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>

          {/* Search toggle */}
          <div className="flex cursor-pointer" onClick={handleSearch}>
            <i className="ri-search-2-line dark:text-white"></i>
          </div>

          {/* Side menu */}
          <ul
            onClick={handleSideMenu}
            className={`flex flex-col items-center ${
              sideMenu ? "h-[5vh] overflow-y-hidden" : " h-[0vh]"
            } cursor-pointer`}
          >
            <li className="flex items-center gap-2">
              <i className="ri-shield-user-line text-black dark:text-white"></i>
              <h1 className="dark:text-white">Signup </h1>
            </li>
          </ul>
        </div>
      </div>

      {/* Search section */}
      <div ref={searchRef} className={`${search ? "block" : "hidden"}`}>
        <SearchMovie />
      </div>
    </section>
  );
};

export default Header;
