import Image from "next/image";
import icons from "@/assets";
export const About = () => {
  return (
    <>
      <div className=" w-full h-[100vh]">
        <p className="text-[25px] border-b-4 border-secondary text-white w-[90px]">
          ABOUT
        </p>
        <div className="flex justify-center w-full mt-6 ">
          <div className=" w-full flex items-center justify-evenly bg-semi-primary p-3 relative">
            <Image
              src={icons?.cornerDots}
              alt="dots"
              className="h-24 w-24 absolute right-[-20px] bottom-0"
            />
            <p className="text-[16px] text-justify text-white max-w-md">
              NEXTWAVE CODERS is a cutting-edge software company specializing in
              the development of AI-powered applications. Our mission is to
              leverage the latest advancements in artificial intelligence to
              create innovative solutions that empower businesses and
              individuals to achieve their goals more efficiently and
              effectively.
            </p>
            <div>
              <Image src={icons?.globel} alt="globel" className="h-auto" />
            </div>
          </div>
        </div>
    
      </div>
    </>
  );
};
