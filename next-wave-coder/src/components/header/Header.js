"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import icons from "@/assets";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="flex justify-between py-2 items-center sticky top-0 bg-primary z-50 w-full px-6 md:px-14">
        {/* Logo */}
        <div>
          <Image src={icons?.logo} alt="logo" className="w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-8 text-white text-sm">
          <Link href={"/home"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/team"}>Team</Link>
          <Link href={"/faqs"}>Faqs</Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "": <MdMenu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Navigation) */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-primary text-white flex flex-col items-center justify-center space-y-6 text-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button className="absolute top-4 right-6" onClick={() => setIsOpen(false)}>
          <IoClose size={28} />
        </button>
        <Link href={"/home"} onClick={() => setIsOpen(false)}>Home</Link>
        <Link href={"/about"} onClick={() => setIsOpen(false)}>About</Link>
        <Link href={"/services"} onClick={() => setIsOpen(false)}>Services</Link>
        <Link href={"/team"} onClick={() => setIsOpen(false)}>Team</Link>
        <Link href={"/faqs"} onClick={() => setIsOpen(false)}>Faqs</Link>
      </div>
    </>
  );
};
