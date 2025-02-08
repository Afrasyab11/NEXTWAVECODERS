import icons from "@/assets";
import Image from "next/image";
export const Home = () => {
  return (
    <>
      <div className="container flex justify-between h-[100vh]">
        <div className="flex flex-col justify-center">
          <p className=" text-secondary text-[45px] font-semibold">WE </p>
          <p className="text-white text-[45px] font-semibold">BUILD AI</p>
          <p className="text-secondary text-[45px] font-semibold"> SAAS APPS</p>
          <p className="text-white text-[18px] font-medium">
            Empowering Innovation through Software Excellence.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image src={icons?.homeDotts} alt="logo" className="h-[50vh] " />
        </div>
      </div>
    </>
  );
};
