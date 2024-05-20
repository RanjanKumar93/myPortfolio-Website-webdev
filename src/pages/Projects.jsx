import goto80 from "../assets/projects-img/go-to-80.png";
import usersImg from "../assets/projects-img/users.png";
import findCountryImg from "../assets/projects-img/find-country.png";
import chatHere from "../assets/projects-img/chat-here.png";

// bg-gradient-to-br from-[#D4145A] to-[#FBB03B]
export const Projects = () => {
  return (
    <div className="w-full h-[100rem] bg-gradient-to-tl from-[#868F96] to-[#596164] flex items-start justify-center">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 py-2 md:py-8 mx-2 md:mx-10 lg:mx-20 xl:mx-40 gap-y-6 md:gap-y-11 gap-x-4">
        <div className="flex items-center rounded-xl py-0.5 bg-white justify-center overflow-hidden shadow-2xl flex-col w-full">
          <img src={chatHere} alt="chat-HERE project" className="bg-cover" />
          <div className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">
            <div className="flex space-x-3">
              <a
                target="_blank"
                href="https://chat-here-project.vercel.app/"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/RanjanKumar93/Chat-HERE-Project.git"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-white justify-center overflow-hidden shadow-2xl flex-col w-full">
          <img src={goto80} alt="go-to-80-game" className="bg-cover" />
          <div className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">
            <div className="flex space-x-3">
              <a
                target="_blank"
                href="https://go-to-80-game.vercel.app/"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/RanjanKumar93/go-to-80-game.git"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-white justify-center overflow-hidden shadow-2xl flex-col w-full">
          <img src={usersImg} alt="users-project" className="bg-cover" />
          <div className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">
            <div className="flex space-x-3">
              <a
                target="_blank"
                href="https://users-info-project.vercel.app/"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/RanjanKumar93/users-info-project.git"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-xl py-0.5 bg-white justify-center overflow-hidden shadow-2xl flex-col w-full">
          <img
            src={findCountryImg}
            alt="find-country-project"
            className="bg-cover"
          />
          <div className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4">
            <div className="flex space-x-3">
              <a
                target="_blank"
                href="https://find-countries-project.vercel.app/"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/RanjanKumar93/FindCountries-Project.git"
                className="border-[2px] border-black rounded-lg px-1 hover:bg-black hover:text-white"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
