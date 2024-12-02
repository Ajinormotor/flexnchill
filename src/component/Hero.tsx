import HeroCard from "../card/HeroCard";
import useGetMovie from "../hooks/useGetMovie";
import useHeroMotion from "../motion/useHeroMotion";

import Slider from "react-slick";
import { motion } from "framer-motion";

import { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3500,
    beforeChange: (_: number, next: number) => setCurrentSlide(next), // Update current slide index
  };

  const { itemVariant, containerVariant } = useHeroMotion();
  const { movies } = useGetMovie();

  return (
    <section className="flex h-screen flex-col overflow-x-hidden border-[2px]">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariant}
        className=""
      >
        <Slider {...settings}>
          {movies.slice(0, 3).map((h, index) => (
            <motion.div
              key={h.id}
              variants={itemVariant}
              whileInView={index === currentSlide ? "visible" : "hidden"}
              transition={{ duration: 1 }}
              className="flex flex-col"
            >
              <HeroCard
                title={h.title}
                overview={h.overview}
                backdropPath={h.backdrop_path}
                rating={h.vote_average}
                date={h.release_date}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Hero;
