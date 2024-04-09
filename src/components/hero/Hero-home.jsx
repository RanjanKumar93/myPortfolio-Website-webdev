import { MdWavingHand } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gradient-to-tr h-screen py-20 flex justify-center items-center from-[#2E3192] to-[#1BFFFF] text-[#ccc]">
      <div className="flex flex-col gap-4 justify-center items-center sm:items-start leading-4">
        <h2 className="text-2xl sm:text-4xl">{"HI, I'M RANJAN"}</h2>  
        <div>
          <div className="flex items-center gap-3">
            <MdWavingHand className="text-[2rem] sm:text-[4rem]" />
            <p className="text-xl sm:text-3xl">{"I'M FULLSTACK WEBDEVELOPER"}</p>
          </div>
          <p className="text-xl sm:text-2xl mt-8">{"I Like"}</p>
          <p className="text-xl sm:text-2xl">{"Creating Websites"}</p>
        </div>
        <div className="flex">
          <Link className="flex text-lg items-center gap-2" to="/projects">
            <div>See My Projects</div>
            <FaLocationArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
