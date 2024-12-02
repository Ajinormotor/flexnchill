import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/Home"
import { AnimatePresence }  from "framer-motion"
import MovieDetails from "../pages/MovieDetails"
import Favorites from "../component/Favorites"

const Routs = () => {

const location = useLocation()


  return (
    <div>
<AnimatePresence  mode="wait">


        <Routes  key={location.pathname}>
            <Route path="/"  element={<Home />}  />
            <Route path="/favorites"  element={<Favorites />}  />
            <Route path="/moviedetails/:id"  element={<MovieDetails />}  />
        </Routes>
        </AnimatePresence>
      
    </div>
  )
}

export default Routs
