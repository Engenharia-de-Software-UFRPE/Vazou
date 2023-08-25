'use client'

import Image from 'next/image'
import Form from '../components/form'

export default function About(){
    return (
        <div  className='flex flex-col min-h-screen font-poppins'>

            <div className="h-[25rem]">
                <div className={`relative h-96 w-[94.9rem] -inset-y-2 z-0`}>
                    <Image src="/about/BannerSobre.png" fill />
                </div>  

                <div className=" relative -inset-y-32 z-10 px-80 text-white font-bold text-[5rem]">
                    <div>
                        Sobre Nós
                    </div>
                </div>
            </div>

            <div className='flex flex-row mx-auto justify-between items-center h-[400px] mt-20'>
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

            <div className='flex  text-white flex-row mx-auto justify-around bg-orange-500  min-w-full'>
                <Image
                    src={'/about/cadeado.svg'}
                    width={360}
                    height={400}
                >
                </Image>
                <div className=''>
                    <h2 className='text-xl font-semibold h-[40px] w-[240px]'>Confie em nós para entender sua segurança</h2>
                    <h3 className='text-base'>Alguma coisa</h3>
                    <p className='text-xs w-[292px] h-[360px] '>Lorem ipsum dolor sit amet consectetur. Congue nis l eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi. Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin.</p>
                </div>
            </div>

            <div className=' flex justify-center items-center flex-col min-w-full mx-auto my-8 '>
                <h2 className=' text-2xl font-semibold'>Nosso Time</h2>
                <div className=' flex flex-col my-6'>
                    <div className='flex flex-row my-4'>

                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Gabrielyicon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>Maria Gabriely</p>
                        </div>

                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Camileicon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>Camile Alheiro</p>
                        </div>

                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Johnnyicon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>João Victor</p>
                        </div>

                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Marinaicon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>Marina Mota</p>
                        </div>
                    </div>
                    <div className='flex flex-row my-4'>
                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Gabrielicon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>Gabriel Leão</p>
                        </div>
                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Stellaicon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>Stella Názario</p>
                        </div>
                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Dayicon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>Dayanne Portela</p>
                        </div>
                        <div className='flex flex-col mx-6 justify-center'>
                            <Image
                                className='shadow-2xl my-2'
                                src={'/about/time/Heitoricon.png'}
                                width={120}
                                height={120}
                            />
                            <p className='mx-auto text-sm'>Heitor Ferraz</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-around items-center mx-auto min-w-full py-7 bg-orange-500'>
                <div>
                    <h2 className='text-2xl font-semibold h-[64px] w-[292]'>Fale Conosco</h2>
                    <p className='text-xs w-[292px] h-[456px] mr-6 '>Lorem ipsum dolor sit amet consectetur. Congue nis l eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi. Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin.</p> </div>
                <Form className=''/>
            </div>
        </div>
    )
}

