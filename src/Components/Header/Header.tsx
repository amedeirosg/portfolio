import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import contexts from "../Context/Context";
export default function Header() {
  //@ts-ignore
  const { homeRef, projectRef, contactRef, phoneNumber } = useContext(contexts);
  const handleClick = () => {
    //@ts-ignore
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      "Olá! Estou precisando de um website"
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div
      className="h-[100vh] bg-header bg-no-repeat w-full bg-cover mb-[5rem]"
      ref={homeRef}
    >
      <div className="px-[10rem] sm:px-[5rem]">
        <header className="flex justify-between items-center  h-[6rem] py-[4rem] md:items-center md:justify-center">
          <div className="flex flex-col h-full justify-center">
            <span className="text-white font-bold text-base md:text-center md:text-2xl">
              ANDRE MEDEIROS
            </span>
            <span className="text-white md:text-sm md:text-center">
              WEB DESIGNER & DEVELOPER
            </span>
          </div>
          <div className="flex gap-[5rem] text-white font-bold md:hidden ">
            <button
              className="hover:text-[--red] duration-200 cursor-pointer"
              onClick={() => {
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              INICIO
            </button>
            <button
              className="hover:text-[--red] duration-200 ease-out cursor-pointer"
              onClick={() => {
                projectRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              PROJETOS
            </button>
            <button
              className="hover:text-[--red] duration-200 marker:cursor-pointer"
              onClick={() => {
                contactRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CONTATO
            </button>
          </div>
        </header>
        <main className="text-white mt-[12rem]">
          <div className="w-[50%] min-w-[39rem] md:flex md:flex-col md:items-center md:min-w-[100%] ">
            <div className=" flex flex-col gap-[16px] mb-[16px] md:items-center">
              <h1 className="font-bold text-5xl md:text-center">
                Full-stack Developer
              </h1>
              <h2 className="text-lg md:text-center">
                Desenvolvedor Full-Stack especializado em React, Tailwind, HTML
                e CSS. Comprometido com a criação de interfaces modernas e
                intuitivas, focando em desempenho e usabilidade.
              </h2>
            </div>
            <div className="flex gap-2 md:flex-col md:justify-center md:items-center h-auto w-fit md:w-[100%] ">
              <button
                onClick={handleClick}
                className="bg-[--red] px-6 py-2 rounded font-bold flex justify-center items-center duration-200 hover:bg-[--red50] md:py-4 md:w-[100%]"
              >
                Preciso de um website
                <ChevronRight />
              </button>
              <button
                className="border px-6 py-4 rounded font-bold flex justify-center items-center duration-200 hover:bg-[--gray50] md:w-[100%] "
                onClick={() => {
                  projectRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projetos
                <ChevronRight />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
