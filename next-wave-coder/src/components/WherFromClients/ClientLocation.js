import Image from "next/image";
import icons from "@/assets";

export const ClientLocatoin = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-col space-y-12 h-[60vh]">
        <div className="mt-10 text-center flex  flex-col space-y-6">
          <p className="text-white text-xl">
            We Have Our Clients From All Around The Globe
          </p>
          <div className="flex justify-center">
            <div className="border-[1px] border-secondary w-[90vh] flex justify-center"></div>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <p className="striped-text [word-spacing:3rem] text-4xl md:text-4xl  break-words font-extrabold uppercase">
              Italy UK France UAE Sweden
            </p>
            <p className="striped-text [word-spacing:3rem] tracking-wide text-4xl md:text-4xl break-words font-extrabold uppercase">
              Germany SaudiArabia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
