import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Cloud } from "@/assets/icons/Cloud";
import LandingImage from "@/assets/img/Landing-Image.png";
import Image from "next/image";
import { DottedCircle } from "@/assets/icons/DottedCircle";
import { DottedPen } from "@/assets/icons/DottedPen";

export default function Hero() {
  return (
    <section className="lg:min-h-[70vh] 2xl:px-40 flex relative px-4 justify-between items-center flex-col lg:flex-row w-full -z-[1]">
      <div className="lg:w-1/2 py-14 text-center z-10 text-white flex flex-col justify-center items-center lg:block lg:text-left">
        <h1 className="font-sophia font-bold lg:text-5xl text-4xl 2xl:w-[534px] mb-6">
          ¡Transforma recuerdos en nuevas aventuras!
        </h1>
        <h2 className="font-raleway font-normal px-4 text-base 2xl:w-[534px] mb-11">
          Creemos que cada juguete tiene una historia que contar y merece ser
          parte de nuevas aventuras. Nuestra plataforma conecta a familias que
          desean encontrar un nuevo hogar para esos objetos que sus hijos ya no
          utilizan.
        </h2>
        <Button className="flex justify-center items-center text-sm gap-2 bg-[#F574AE] font-raleway font-bold rounded-3xl w-52 hover:bg-[#F568A7] h-12">
          Compra Ahora <MoveRight className="size-5" />
        </Button>
      </div>
      <div className="h-full w-1/2 hidden lg:flex relative justify-center items-center">
        <Cloud className=" absolute -bottom-10 -right-3" />
        <Image
          src={LandingImage}
          alt="Chica jugando con juguetes"
          className="z-10"
        />
      </div>
      <DottedCircle className="absolute -bottom-44 -left-56 scale-[0.69] 2xl:scale-0 " />
      <DottedPen className="absolute left-0 scale-125 hidden 2xl:block " />
      <DottedCircle className="absolute 2xl:top-0 -top-20 -right-40 2xl:-right-8 z-[-1] scale-[0.69] 2xl:scale-125" />
    </section>
  );
}
