import Image from "next/image";
import icons from "@/assets";
import Link from "next/link";
export const Header = () => {
  return (
    <>
       <div className="flex justify-between py-2 items-center sticky top-0  w-full px-14 ">
        <div className="">
          <Image src={icons?.logo} alt="logo" className=" w-auto" />
        </div>
        <div className="flex gap-x-8 text-white text-sm">
          <Link href={"/home"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/home"}>Services</Link>
          <Link href={"/home"}>Team</Link>
          <Link href={"/home"}>Faqs</Link>
        </div>
      </div>
    </>
  );
};
