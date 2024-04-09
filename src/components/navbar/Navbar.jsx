import reactico from "../../assets/react.svg";
import nextico from "../../assets/nextjs.svg";
import { SiTailwindcss } from "react-icons/si";
import { NavLink } from "react-router-dom";

import { useRef } from "react";
// bg-white sm:bg-[yellow] md:bg-[green] lg:bg-[blue] xl:bg-[red]
// bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB]
function Navbar() {
  const menuRef = useRef();
  const iconRef = useRef();
  const handleArrowDownClick = (e) => {
    menuRef.current.classList.toggle("hidden");
    menuRef.current.classList.toggle("flex");
    iconRef.current.classList.toggle("hidden");
    iconRef.current.classList.toggle("flex");
    e.target.classList.toggle("rotate-180")
  };
  return (
    <div className="flex justify-around items-center p-4 shadow bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB]">
      <div className="flex items-center justify-center">
        <p className="text-[#171717] text-lg md:text-2xl font-bold">
          {"<MyPortfolio />"}
        </p>
      </div>
      <img src={nextico}
        onClick={handleArrowDownClick}
        className="lg:hidden duration-200 h-8"
      />
      <ul
        ref={menuRef}
        className="absolute hidden w-full justify-center lg:w-auto py-3 lg:py-0 bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB] lg:bg-none top-16 lg:top-0 lg:static lg:flex items-center gap-x-1 sm:gap-x-4 xl:gap-x-12 text-[#626262] text-xs sm:text-base md:text-lg font-medium"
      >
        <li className="flex hover:text-red-950 items-center justify-center cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "text-red-900" : "";
            }}
          >
            {"<Home />"}
          </NavLink>
        </li>
        <li className="flex hover:text-red-950 flex-col items-center justify-center gap-1 cursor-pointer">
          <NavLink
            to="/skills"
            className={({ isActive }) => {
              return isActive ? "text-red-900" : "";
            }}
          >
            {"<Skills />"}
          </NavLink>
        </li>
        <li className="flex hover:text-red-950 flex-col items-center justify-center gap-1 cursor-pointer">
          <NavLink
            to="/projects"
            className={({ isActive }) => {
              return isActive ? "text-red-900" : "";
            }}
          >
            {"<Projects />"}
          </NavLink>
        </li>
        <li className="flex hover:text-red-950 flex-col items-center justify-center gap-1 cursor-pointer">
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive ? "text-red-900" : "";
            }}
          >
            {"<Contact Me />"}
          </NavLink>
        </li>
      </ul>
      <div
        ref={iconRef}
        className="absolute hidden bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB] lg:bg-none py-2 lg:py-0 w-full lg:w-auto justify-center top-24 sm:top-28 lg:top-0 lg:static lg:flex gap-4 items-center"
      >
        <a href="https://react.dev/" target="_blank">
          <img src={reactico} className="h-6 sm:h-10" alt="react" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <SiTailwindcss className="text-blue-700 text-[2rem]" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
