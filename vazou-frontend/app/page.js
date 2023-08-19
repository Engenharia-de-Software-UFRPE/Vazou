'use client'

import Image from "next/image"
import CardEnterprise from "./components/cardEnterprise"

export default function Home() {


  return (
    <main className='flex min-h-screen font-poppins'>

      {/* Notícia principal - Início */}
      <div>
        <div className="h-[25rem]">
          <div className={`relative h-96 w-[94.9rem] -inset-y-2 z-0`}>
            <Image src="/home/home_image.png" fill />
          </div>  

          <div className=" relative -inset-y-32 z-10 px-80 text-white font-bold text-[2rem]">
            <div>
              Lorem Ipsum lorem Ipsum
            </div>
            <div className="text-[1rem] font-bold">
              lorem ipsum lorem ipsum
            </div>
          </div>
        </div>

      
      {/* Notícia principal - Fim */}
      
        <div className="flex flex-col ml-80">

          {/* Mais notícias - Inicio */}
          <div className="text-orange-500 text-lg font-extrabold mb-4">
            Mais Notícias
          </div>
          
          <div className="flex flex-row">
            <Image
              src={"/home/home_image2.png"}
              width={300}
              height={400}
            />
            <Image
              src={"/home/home_image2.png"}
              width={300}
              height={400}
            />
            <Image
              src={"/home/home_image2.png"}
              width={300}
              height={400}
            />
          </div>
          {/* Mais notícias - Fim */}

          {/* Ranking - Início */}

          <div className="text-orange-500 text-2xl font-black mt-10 mb-2">
            Ranking
          </div>

          <div className="font-bold text-sm">
            Empresas com maior Score de Segurança
          </div>

          <CardEnterprise />

          <CardEnterprise />


          {/* Ranking - Fim */}



        </div>
      </div>

    </main>
  )
}

