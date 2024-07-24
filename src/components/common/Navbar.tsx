import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Nubes from "@/assets/svg/Nubes.svg";
import { CircleUserRound, Search, ShoppingBag } from "lucide-react";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { CarBuyIcon } from "@/assets/icons/CarBuyIcon";
import { ProfileIcon } from "@/assets/icons/ProfileIcon";
export default function Navbar() {
  return (
    <div className="flex bg-white justify-center lg:justify-between items-center w-full mt-12 px-16 py-2.5 2xl:pb-2 relative ">
      <div className="">
        <Image src={Logo} alt="" />
      </div>
      <ul className="font-raleway text-[#696969] justify-center items-center gap-24 hidden lg:flex font-medium">
        <li>Quienes somos</li>
        <li>Testimonios</li>
        <li>Ofertas</li>
      </ul>
      <div className="justify-center items-center gap-10 hidden lg:flex">
        <SearchIcon className="" />
        <CarBuyIcon className="" />
        <ProfileIcon className="" />
      </div>
      <Image
        src={Nubes}
        alt=""
        className="absolute -bottom-3 w-full left-0 hidden 2xl:block"
      />
    </div>
  );
}
