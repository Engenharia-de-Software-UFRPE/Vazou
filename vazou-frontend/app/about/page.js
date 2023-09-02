'use client'
import Enterprise from '../components/Enterprise'
import Image from 'next/image'
import Form from '../components/form'

export default function About(){
    return (
        <div  className='flex flex-col min-h-screen font-poppins'>

            <div className="flex flex-col  h-[25rem]">
                <div className={`relative h-96 w-[94.9rem] z-0 items-center`}>
                    <Image src="/about/BannerSobre.png" fill />
                </div>  

                <div className=" relative -inset-y-32 z-10 px-80 text-white font-bold text-[5rem]">
                    <div>
                        Sobre Nós
                    </div>
                </div>
            </div>

            <div className='flex flex-row mx-auto justify-center items-center h-[400px] '>
                <div className='flex flex-col my-4'>
                    <h2 className='text-2xl font-semibold h-[64px] w-[300]'>Nosso Objetivo</h2>
                    <p className='text-base w-[300px] h-[456px] '>Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.</p>
                </div>
                <Image
                    className='mx-8 mt-[-100px]'
                    src={'/about/keys.svg'}
                    width={300}
                    height={350}
                >
                </Image>
                
            </div>

            <div className='flex  text-white flex-row mx-auto justify-center  items-center bg-orange-500  min-w-full'>
                <Image
                    src={'/about/cadeado.svg'}
                    width={360}
                    height={400}
                >
                </Image>
                <div className='mx-12 items-start'>
                    <h2 className='text-3xl font-bold w-[300px]'>Confie em nós para entender sua segurança</h2>
                    <h3 className='text-xl my-2'>Conheça as vulnerabilidades!</h3>
                    <p className='text-base w-[300px] mt-8'>Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi. Vel sit semper eleifend sed imperdiet consectetur sollicitudin.</p>
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

            <div className='flex flex-row justify-center items-start min-w-full py-10 bg-orange-500'>
                <div className='w-[300px] mr-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Fale Conosco</h2>
                    <p className='text-base  '>Lorem ipsum dolor sit amet consectetur. Congue nis l eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim.</p> 
                </div>
                <Form className=''/>
            </div>

            <Enterprise/>

        </div>
        
    )
}

