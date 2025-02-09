import Image from "next/image";
import icons from "@/assets";

let team = [
  {
    image: icons?.COO,
    name: "Muhammad Afrasyab",
    role: "COO",
  },
  {
    image: icons?.operationManager,
    name: "Asad Ali",
    role: "CFO",
  },
  {
    image: icons?.operationManager,
    name: "AQSA IJAZ",
    role: "Operation Manager",
  },
  {
    image: icons?.muttraf,
    name: "Muhammad Muttraf",
    role: "MERN Stack Developer",
  },
];
export const Team = () => {
  return (
    <>
      <div className="w-full flex flex-col space-y-12 h-[100vh]">
        <p className="text-[25px] uppercase  text- border-b-4 border-secondary text-white w-[90px]">
          TEAM
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 w-full  gap-x-4 gap-y-4 ">
          {team?.map((item, index) => (
            <div key={index} className="bg-semi-primary rounded-md">
              <Image
                src={item?.image}
                alt="team"
                className="h-[300px] w-full bg-cover"
                width={100}
                height={300}
              />
              <p className="text-white mt-4 font-bold text-xl text-end px-3">{item?.name}</p>
              <p className="text-secondary text-lg font-medium mt-2 text-end  px-3 pb-3">{item?.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
