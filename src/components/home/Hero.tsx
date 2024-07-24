import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="min-h-[70vh] 2xl:px-40 flex justify-between items-center w-full">
      <div className="w-1/2 text-white">
        <h1 className="font-sophia font-bold text-5xl 2xl:w-[534px] mb-6">
          ¡Transforma recuerdos en nuevas aventuras!
        </h1>
        <h2 className="font-raleway font-normal text-base 2xl:w-[534px] mb-11">
          Creemos que cada juguete tiene una historia que contar y merece ser
          parte de nuevas aventuras. Nuestra plataforma conecta a familias que
          desean encontrar un nuevo hogar para esos objetos que sus hijos ya no
          utilizan.
        </h2>
        <Button className="flex justify-center items-center gap-2 bg-[#F574AE] font-raleway font-bold rounded-3xl w-52 hover:bg-[#F568A7] h-12">
          Compra Ahora <MoveRight className="size-5" />
        </Button>
      </div>
      <div className="h-full w-1/2"></div>
    </section>
  );
}
