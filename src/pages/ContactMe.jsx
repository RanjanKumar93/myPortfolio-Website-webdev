import { CiFaceSmile } from "react-icons/ci";

export const ContactMe = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br flex flex-col items-center justify-center text-white from-[#09203F] to-[#537895]">
      <div className="flex gap-2 justify-center items-center leading-4">
        <CiFaceSmile size={40} />
        <h1 className="text-2xl">Hi!</h1>
      </div>

      <p className="text-lg sm:text-3xl mt-4">{"Email: rk0936626@gmail.com"}</p>
    </div>
  );
};
