'use client'

import Image from "next/image";
import Input from 'app/components/input'

export default async function login() {


    return (
        <main className='flex min-h-screen font-poppins bg-orange-500'>

            <div className=' flex justify-center items-center flex-col min-w-full mx-auto my-8 '>
                <Image
                    src="/home/login_logo_preta.png"
                    width={243}
                    height={81}
                />

                <div className=' flex flex-col items-center font-poppins mt-28'>
                    <Input title="E-mail" type="E-mail" />
                    <Input title="Senha" type="Senha" />
                    <div className=" flex flex-col mt-10">
                        <button className={`m-4 font-poppins w-[140px] h-[40px] text-white bg-black rounded`}>
                            Entrar
                        </button>

                    </div>

                </div>
            </div>


        </main>
    )
}

