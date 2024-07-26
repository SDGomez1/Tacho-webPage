import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen relative overflow-hidden bg-purple -z-50 flex-col items-center ">
      <Navbar />
      <Hero />
    </main>
  );
}
