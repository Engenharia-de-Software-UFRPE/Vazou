'use client'
import Image from "next/image";
import NavbarButton from "./navbarButton";
import Link from "next/link";

export default function Navbar(){

    return(
        <div className="flex flex-row min-w-full h-16 justify-around items-center font-poppins  bg-black text-white ">
        <Link href={'/'}>
            <div className='p-2'>
                <Image 
                    src={'/vazou_white_logo.png'} 
                    width={100}
                    height={100}
                />
            </div>
        </Link>
        <div className='flex flex-row items-center px-2'>
          <NavbarButton text="Home" link="/" isActive={false}/>
          <NavbarButton text="Empresas" link="/enterprise" isActive={false}/>
          <NavbarButton text="Sobre nós" link="/about" isActive={false}/>
        </div>
      </div>
    )
}