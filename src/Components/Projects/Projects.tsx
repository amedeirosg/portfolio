import { useContext } from "react";
import contexts from "../Context/Context";

export default function Projects() {
  //@ts-ignore
  const { projectRef } = useContext(contexts);

  return (
    <div
      className="px-[10rem]  mb-[10rem] w-full flex flex-col sm:justify-center sm:items-center sm:justify-items-center index z-50 "
      ref={projectRef}
    >
      <h1 className="text-3xl font-bold text-[--white] mb-[2rem] ">Projetos</h1>
      <div className="group grid grid-cols-3 justify-items-center rounded gap-[32px] xl:grid-cols-2 xl:justify-items-center sm:grid-cols-1 ">
        <div className="cursor-none item bg-[--white] w-[340px] h-[306px] duration-[350ms]  flex rounded flex-col ">
          <div className="bg-apae brightness-75 w-full h-[60%] rounded"></div>
          <div className="px-3 py-4 flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[--red] font-bold ">
                APAE - PEDRO LEOPOLDO
              </span>
              <span>
                Website Associação de Pais e Amigos dos Excepcionais (APAE) -
                PEDRO LEOPOLDO
              </span>
            </div>
            <span className="font-bold text-[--gray50]">
              Em desenvolvimento...
            </span>
          </div>
        </div>

        <div className="item bg-[--white] w-[340px] h-[306px] duration-[350ms] cursor-pointer flex rounded flex-col">
          <div className="bg-pjirmaoanimal brightness-75 w-full h-[60%] rounded bg-cover"></div>
          <div className="px-3 py-4 flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[--red] font-bold gap-">
                PROJETO IRMÃO ANIMAL
              </span>
              <span>Website Projeto irmão animal de Pedro Leopoldo</span>
            </div>
            <span className="font-bold text-[--gray50]">Finalizado</span>
          </div>
        </div>
        <div className="item bg-[--white] w-[340px] h-[306px] duration-[350ms] cursor-pointer flex rounded flex-col">
          <div className="bg-black w-full h-[60%] rounded"></div>
          <div className="px-3 py-4 flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[--red] font-bold ">
                APAE - PEDRO LEOPOLDO
              </span>
              <span>
                Website Associação de Pais e Amigos dos Excepcionais (APAE) -
                PEDRO LEOPOLDO
              </span>
            </div>
            <span className="font-bold text-[--gray50]">
              Em desenvolvimento...
            </span>
          </div>
        </div>
        <div className="item bg-[--white] w-[340px] h-[306px] duration-[350ms] cursor-pointer flex rounded flex-col">
          <div className="bg-black w-full h-[60%] rounded"></div>
          <div className="px-3 py-4 flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[--red] font-bold ">
                APAE - PEDRO LEOPOLDO
              </span>
              <span>
                Website Associação de Pais e Amigos dos Excepcionais (APAE) -
                PEDRO LEOPOLDO
              </span>
            </div>
            <span className="font-bold text-[--gray50]">
              Em desenvolvimento...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
