'use client'

import Image from 'next/image'
import Form from '../components/form'

export default function About(){
    return (
        <div  className='flex flex-col min-h-screen font-poppins'>
            <div className='flex flex-col mx-auto'>
            <Image
                className='justify-center  min-w-full h-[400px] bg-cover'
                src={'/about/BannerSobre.png'}
                width={2000}
                height={1000}
            >
            </Image>
              <h1 className="text-left text-8xl my-2 mt-[-100px] text-white ml-1 font-bold"> Sobre Nós</h1>
            </div>
            <div className='flex flex-row mx-auto justify-around items-center h-[400px] mt-20'>
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-semibold h-[64px] w-[292]'>Nosso Objetivo</h2>
                    <p className='text-xs w-[292px] h-[456px] '>Lorem ipsum dolor sit amet consectetur. Congue nis l eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi. Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.</p>
                </div>
                <Image
                    className=''
                    src={'/about/keys.svg'}
                    width={300}
                    height={350}
                >
                </Image>
                
            </div>

            <div className='flex flex-row mx-auto justify-around bg-orange-500  min-w-full'>
                <Image
                    src={'/about/cadeado.svg'}
                    width={360}
                    height={400}
                >
                </Image>
                <div>
                    <h2 className='text-2xl font-semibold h-[40px] w-[240px]'>Nosso Objetivo</h2>
                    <p className='text-xs w-[292px] h-[360px]'>Lorem ipsum dolor sit amet consectetur. Congue nis l eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi. Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin.</p>
                </div>
            </div>

            <div className='flex flex-row justify-around items-center mx-auto my-5'>
                <div>
                    <h2 className='text-2xl font-semibold h-[64px] w-[292]'>Nosso Objetivo</h2>
                    <p className='text-xs w-[292px] h-[456px] mr-6 '>Lorem ipsum dolor sit amet consectetur. Congue nis l eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi. Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin.</p> </div>
                <Form className=''/>
            </div>
        </div>
    )
}

