import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white dark:bg-black">
      {/* Imagen para móvil */}
      <Image
        src="/responsive.png"
        alt="Under Construction"
        fill
        priority
        className="object-contain md:hidden"
      />
      {/* Imagen para desktop */}
      <Image
        src="/underconstruction.png"
        alt="Under Construction"
        fill
        priority
        className="object-contain hidden md:block"
      />
    </div>
  );
}
