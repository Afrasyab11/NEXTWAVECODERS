import icons from "@/assets";
import Image from "next/image";
export const Quality = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-14 my-20 sm:px-4 md:px-36">
        <div className=" h-96 flex flex-col justify-end items-center bg-no-repeat px-4 text-white bg-[url(/LeftThreeBox.svg)]">
          <p className="text-center text-secondary w-full text-5xl">Secure App</p>
          <p className="text-start w-full text-5xl">Aesthetic UI</p>
        </div>
        <div className=" h-96 flex flex-col justify-end items-center bg-no-repeat text-white bg-[url(/rightThreebox.svg)] px-4">
          <p className="text-start w-full text-secondary  text-5xl">Maintenance</p>
          <p className="text-end w-full text-5xl">Consultancy</p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-white text-5xl">QUALITY</p>
      </div>
    </>
  );
};
