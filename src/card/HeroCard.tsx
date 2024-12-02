import useHeroMotion from "../motion/useHeroMotion";
import { HeroCardProps } from "../utlity/types/herocard.type";

import { motion } from "framer-motion";

const HeroCard = ({
  title,
  overview,
  backdropPath,
  rating,
  date,
}: HeroCardProps) => {
  const { itemVariant, containerVariant } = useHeroMotion();
  return (
    <section
      className={`md:h-[85vh] h-[90vh] bg-cover bg-center  flex flex-col items-start justify-center relative  text-white`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdropPath})`,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }} // Ensure it triggers when partially visible
        variants={containerVariant}
        className=" bg-opacity-50 p-4 rounded max-w-[600px] w-full flex flex-col items-start justify-center"
      >
        <div className=" border-l-[2px] border-red-800 px-4 rounded-l-sm ">
          <h1 className=" font-bold text-xl  opacity-85 text-[#f9f9f9] font-playfair uppercase">
            New Release
          </h1>
        </div>

        <div className="flex flex-col gap-6 items-start justify-center mt-[2rem]">
          <motion.h1
            variants={itemVariant}
            className="md:text-5xl text-3xl font-bold text-[#f9f9f9] font-libre"
          >
            {title}
          </motion.h1>

          <motion.div
            variants={itemVariant}
            className="flex items-center gap-4"
          >
            <div
              className={`rounded-[50%] w-[50px] h-[50px] border-[3px] border-red-500 flex items-center justify-center`}
            >
              <h1 className=" text-sm font-bold opacity-80">{rating}</h1>
            </div>
            <h1 className="text-sm font-bold opacity-80">{date}</h1>

            <div className="w-[90px] h-[25px] flex items-center justify-center border-[1px] border-white">
              <h1 className="w-[40px] bg-transparent text-xs  text-center font-bold">
                4k
              </h1>
              <h1 className="w-[100px] h-full text-center pt-1 bg-white text-xs text-black font-bold">
                Ultra-HD
              </h1>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariant}
            className="text-base font-normal  opacity-40 font-libre text-[#f9f9f9]"
          >
            {overview}
          </motion.p>

          <motion.button
            variants={itemVariant}
            className="bg-red-600 w-[190px] h-[54px]  px-4 py-2 flex items-center justify-cente hover:bg-transparent hover:border-[1px] hover:border-red-700"
          >
            <h1 className=" font-medium text-normal text-white font-libre">
              DISCOVER NOW
            </h1>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCard;
