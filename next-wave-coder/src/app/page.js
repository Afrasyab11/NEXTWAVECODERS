import Image from "next/image";
import { Header } from "@/components/header/Header";
import Link from "next/link";
import icons from "@/assets";
import { Home } from "@/components/home/Home";
import { About } from "@/components/about/About";
import { Services } from "@/components/services/Services";
import { ClientLocatoin } from "@/components/WherFromClients/ClientLocation";
import { Team } from "@/components/team/Team";
import { AgencyDetails } from "@/components/agencyDetails/Agency";
import { Quality } from "@/components/quality/Quality";
export default function page() {
  return (
    <div className="w-full ">
      <Header />
      <div className="px-3 md:px-4 lg:px-14">
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
        <div>
          <AgencyDetails />
        </div>
        <div>
          <Quality />
        </div>
      </div>
    </div>
  );
}
