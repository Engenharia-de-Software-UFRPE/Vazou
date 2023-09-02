
import Image from "next/image"
import CardEnterprise from "./components/cardEnterprise"
import Button from './components/button'
import { useRouter } from 'next/navigation'
import RankingSection from './components/rankingSection'
import FormDenuncia from "./components/form_den"
import Link from "next/link"

async function getEnterprise() {
  const res = await fetch(`http://127.0.0.1:8000/empresas`)
  return res.json()
}

async function getNews() {
  const res = await fetch(`http://127.0.0.1:8000/noticias/recentes`)
  return res.json()
}

export default async function Home() {

  const enterpriseData = getEnterprise()
  const [enterprise] = await Promise.all([enterpriseData])

  const newsData = getNews()
  const [news] = await Promise.all([newsData])
/* 
  const router = useRouter(); */


  return (
    <main className='flex min-h-screen font-poppins bg-white '>

      
      <div>
        {/* Notícia principal - Início */}
        <div className="h-[25rem]">
          <div className={`relative h-96 w-[94.45rem] -inset-y-2 z-0`}>
            <Image src="/home/home_image.png" fill />
          </div>  

          <div className=" relative -inset-y-32 z-10 px-80 text-white font-bold text-[2rem]">
            <div>
              {news[0].title}
            </div>
            <div className="text-[1rem] font-bold">
              {news[0].subtitle}
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

          <div className="text-orange-500 text-2xl font-extrabold mt-10 mb-2">
            Ranking
          </div>

          <div className="font-bold text-sm">
            Empresas com maior Score de Segurança
          </div>

          <CardEnterprise enterprise={enterprise[0]} />

          <CardEnterprise enterprise={enterprise[1]} />

          <div className='flex justify-center w-[56rem] mb-10'>
            <Link href={'/enterprise'}>
              <Button 
                children={"Ver mais"}
                backgroundColor={"bg-black"}        />
            </Link>
            
          </div>
          {/* Ranking - Fim */}

        </div>

        {/* Sobre - Inicio */}
        <div className='flex  bg-orange-500 px-80 py-10 text-gray-200'>
          <div className='w-[33rem] py-10'>
            <div className='font-extrabold text-4xl mb-5'>
              Um pouco sobre o VAZOU
            </div>
            <div className=' font-semibold text-lg'>
              Desenvolvedores
            </div>
            <div className='mb-2'>
              Aqueles por de trás do projeto
            </div>
            <div className='text-sm text-justify w-[27rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>
          <div className='flex flex-col'>
            <Image 
              src={"/home/about1.png"}
              width={298}
              height={160}
            />

            <Image 
              src={"/home/about2.png"}
              width={298}
              height={160}
            />
          </div>
        </div>
        {/* Sobre - Fim */}
        
        {/* Metodologia - Inicio */}
        <div className='flex bg-black px-72 py-14 text-gray-200'>
          <div className='w-[32rem]'>
            <div className='font-bold text-2xl mb-4'>
              Metodologia
            </div>
            <div className='text-xl mb-4'>
              Como fazemos as coisas no VAZOU
            </div>
            <div className='w-[29rem] text-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className='ml-4'>
              <RankingSection imageName={"/ranking_icons/Great.png"} type={"Great"} />
              <RankingSection imageName={"/ranking_icons/Atention.png"} type={"Atention"} />
              <RankingSection imageName={"/ranking_icons/Alert.png"} type={"Alert"} />
              <RankingSection imageName={"/ranking_icons/Danger.png"} type={"Danger"} />
            </div>

        </div>
        {/* Metodoloia - Fim */}


        {/* Denuncia - Inicio */}
        <div className='py-20'>
          <div className='px-80 mb-10'>
            <div className='font-black text-4xl mb-1'>
              Faça sua denúncia aqui
            </div>
            <div className='font-bold text-2xl'>
              Descreva o caso de vazamento ou uso indevido de dados privados
            </div>
          </div>
          <FormDenuncia/>
        
        </div>
        {/* Denuncia - Fim */}
      </div>
    </main>
  )
}

