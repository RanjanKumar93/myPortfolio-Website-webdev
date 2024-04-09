import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Skills = () => {
  return (
    <div className="w-full bg-gradient-to-br flex items-center justify-center from-[#009245] to-[#FCEE21]">
      <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-2 md:py-8 mx-2 md:mx-10 lg:mx-20 xl:mx-40 gap-y-6 md:gap-y-20 gap-x-4">
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <FaHtml5 className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">HTML</p>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <FaCss3 className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">CSS</p>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <IoLogoJavascript className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">JS</p>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <FaNode className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">NodeJS</p>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <SiExpress className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">ExpressJS</p>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <BsFiletypeSql className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">SQL</p>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <SiMongodb className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">MongoDB</p>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <FaReact className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">ReactJS</p>
        </div>
        {/* <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <SiNextdotjs className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">NextJS</p>
        </div> */}
        <div className="flex items-center rounded-xl py-0.5 bg-[white] justify-center shadow-2xl flex-col w-70 max-w-72">
          <SiTailwindcss className="text-[7rem] sm:text-[10rem] lg:text-[12rem]" />
          <p className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">TailwindCSS</p>
        </div>
      </div>
    </div>
  );
};
