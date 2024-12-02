
import { useState } from "react"
import {Link, NavLink}  from "react-router-dom"
import SearchMovie from "../component/SearchMovie"
import useHeader from "./useHeader"




const MobileHeader = () => {


  const {headerRef}  = useHeader();

    const [sideMenu, setSideMenu]  = useState(false)
   

  const handleSideMenu = () => {
    setSideMenu(!sideMenu)
  }


const { searchRef,handleSearch,search, nav_link,toggleTheme, isDarkMode }  = useHeader();

  return (
<section ref={headerRef} className="w-full h-[10vh] md:h-0 shadow-md flex">
{search && <div className="bg-black opacity-40 fixed inset-0 z-30 "></div>}

<div className="flex  flex-col lg:hidden items-center justify-center
 w-full p-3  z-10 bg-white dark:bg-black h-full">


<div className="flex justify-between mx-auto w-full">

<Link to="/" className="flex items-center">
    <i className="ri-tv-2-fill text-3xl  dark:text-white"></i>
    <h1    className=" font-semibold text-2xl  flex gap-1 text-black dark:text-white font-libre">Flex &<span className="text-red-400">Chill</span></h1>
    </Link>


<div className="flex  items-center gap-[5px]"  >

<div className="flex gap-4" onClick={handleSideMenu}>

{sideMenu?
        <i className="ri-close-line dark:text-white" ></i>
        :
<i className="ri-menu-2-line dark:text-white"></i>
}
</div>

    {/* Dark mode toggle */}
    <div onClick={toggleTheme} className="cursor-pointer flex items-center gap-1">
            {isDarkMode ? (
              <i className="ri-sun-foggy-fill text-yellow-400 text-base dark:text-white"></i>
            ) : (
              <i className="ri-moon-clear-fill text-gray-700 text-base  dark:text-white"></i>
            )}
            <span className="hidden hover:block">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>



<i className="ri-search-2-line dark:text-white"  onClick={handleSearch}></i>
</div>


</div>


{/* menu-links */}

<div className={`absolute  bg-white h-[40%]  z-10 w-full  
  ${sideMenu? "fixed h-[30vh] top-[60px]" : "hidden"}`}>
    <ul className="flex flex-col items-center justify-center h-full gap-2">
        {
            nav_link.map((n)=>(
              <NavLink key={n.id} to={n.path} className="">{n.display}</NavLink>  
            ))
        }
    </ul>
</div>


</div>

<div className=" flex">

   
      


<div ref={searchRef} className={`${search? "block"  : "hidden"}`} >
    <SearchMovie/>
</div>


</div>


</section>
  )
}

export default MobileHeader
