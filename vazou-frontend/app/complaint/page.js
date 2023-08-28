'use client'
import Image from "next/image";
import CardComplaint from "../components/cardComplaint";
import SearchBar from "../components/searchbar";


export default function complaint() {

    return (
        <div className='flex flex-col min-h-screen bg-white'>
            <div className="bg-orange-500 min-w-full h-56 flex items-center ">
                <div className={`relative mx-auto`}>

                    <Image className="absolute bottom-0 z-0"
                        src="/home/complaint_logo.png"
                        width={915}
                        height={407}
                    />

                    <SearchBar/>  
                    {/* a imagem ta na frente dessa mizéra, resolve aí pfv */}
                </div>

            </div>

            <div className='ml-64'>
                <button onClick={() => onClickFunction()} className={`m-4 font-poppins w-[140px] h-[40px] text-orange-500 rounded shadow border-[2px] border-orange-500`}>
                    Lido
                </button>

                <button onClick={() => onClickFunction()} className={`m-4 font-poppins w-[140px] h-[40px] text-white rounded shadow bg-orange-500`}>
                    Não lido
                </button>


            </div>


            <div className="flex justify-center">
                <CardComplaint />

            </div>
        </div>
    )
}