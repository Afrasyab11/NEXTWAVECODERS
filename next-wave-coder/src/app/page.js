import Image from "next/image";
import { Header } from "@/components/header/Header";
import Link from "next/link";
import icons from "@/assets";
import { Home } from "@/components/home/Home";
import { About } from "@/components/about/About";
import { Services } from "@/components/services/Services";
import { ClientLocatoin } from "@/components/WherFromClients/ClientLocation";
import { Team } from "@/components/team/Team";
export default function page() {
  return (
    <div className="w-full ">
      <Header />
      <div className="px-14">
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <ClientLocatoin />
        </div>
        <div>
          <Team />
        </div>
      </div>
    </div>
  );
}
