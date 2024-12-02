import { useEffect, useRef, useState } from "react";
import useTheme from "../utlity/theme/themes";


const useHeader = () => {

    const nav_link = [
        { id: "1", path: "/", display: "Home" },
        { id: "2", path: "movies", display: "Movies" },
        { id: "3", path: "#", display: "About" },
        { id: "4", path: "/favorites", display: "Favorites" },
      ];


      const [sideMenu, setSideMenu] = useState(false);
      const [search, setSearch] = useState(false);

      const searchRef = useRef<HTMLDivElement | null>(null);
      useEffect(() => {
        const handleHideSearch = (e: MouseEvent) => {
          if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
            setSearch(false);
          }
        };
    
        if (search) {
          window.addEventListener("mousedown", handleHideSearch);
        }
    
        return () => {
          window.removeEventListener("mousedown", handleHideSearch);
        };
      }, [search]);




    //   dark them toggle

    

  const { switchTheme, setThemeOnLoad } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false); 

    
  useEffect(() => {
    setThemeOnLoad();
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, [setThemeOnLoad]);

  const toggleTheme = () => {
    switchTheme(); 
    setIsDarkMode((prev) => !prev); 
  };




  
  const handleSideMenu = () => setSideMenu((prev) => !prev);

  const handleSearch = () => setSearch((prev) => !prev);

// Header


const headerRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    const handleHeader = () => {
      // Use window.scrollY or window.pageYOffset for better accuracy
      const scrollPosition = window.scrollY || window.pageYOffset;
  
      if (headerRef.current) {
        if (scrollPosition > 80) {
          headerRef.current.classList.add("header_shrink");
        } else {
          headerRef.current.classList.remove("header_shrink");
        }
      }
    };
  
    handleHeader(); // To handle the initial load
  
    window.addEventListener("scroll", handleHeader);
  
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);
  

    
  return {
nav_link,
sideMenu,setSideMenu, search,setSearch, isDarkMode,
toggleTheme, handleSideMenu, handleSearch, searchRef, headerRef

  }
}

export default useHeader
