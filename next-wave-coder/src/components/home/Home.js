import icons from "@/assets";
import Image from "next/image";
export const Home = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-3  h-[100vh]">
        <div className="flex flex-col gap-y-4 justify-center sm:order-last md:order-1">
          <p className=" text-secondary sm:text-2xl md:text-[30px] lg:text-[45px] font-semibold">WE </p>
          <p className="text-white sm:text-2xl md:text-[30px] lg:text-[45px] font-semibold">BUILD AI</p>
          <p className="text-secondary sm:text-2xl md:text-[30px] lg:text-[45px] font-semibold"> SAAS APPS</p>
          <p className="text-white text-[18px] font-medium">
            Empowering Innovation through Software Excellence.
          </p>
        </div>
        <div className="flex justify-center items-center md:order-2">
          <Image src={icons?.homeDotts} alt="logo" className="sm:h-auto md:h-[30vh] lg:h-[50vh] " />
        </div>
      </div>
    </>
  );
};
