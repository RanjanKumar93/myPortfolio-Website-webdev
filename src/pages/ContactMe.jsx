import { FaRegFaceSadTear } from "react-icons/fa6";

export const ContactMe = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br flex flex-col items-center justify-center text-white from-[#09203F] to-[#537895]">
      <div className="flex gap-4 justify-center items-center leading-4">
        <FaRegFaceSadTear size={40} />
        <h1 className="text-2xl">SORRY</h1>
      </div>

      <p className="text-xl sm:text-3xl mt-8">{"NOT AVAILABLE RIGHT NOW"}</p>
    </div>
  );
};
