import Image from "next/image";
import Link from "next/link";

export default function Footer(){

    return(
        <footer className=" flex h-[260px] justify-around bg-black text-white items-center font-poppins min-w-full flex-">
            <div className="flex flex-col space-y-3">
                <Link href={'/'}>
                    <Image 
                        src={'/vazou_white_logo.png'} 
                        width={136}
                        height={136}
                    />
                </Link>
                <h1 className=" text-[40px] font-bold">
                    Contato
                </h1>
                <div className=" space-y-2">
                    <p >
                        E-mail@gmail.com
                    </p>
                    <p>
                        (DDD) 9xxxx-xxxx
                    </p>
                    <p>
                        (DDD) 9xxxx-xxxx
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2">
                <Image 
                    src={'/facebook.png'} 
                    width={32}
                    height={32}
                />
                <Image 
                    src={'/twitter.png'} 
                    width={32}
                    height={32}
                />
                <Image 
                    src={'/instagram.png'} 
                    width={32}
                    height={32}
                />
                </div>
                <p>Acompanhe a gente!</p>
            </div>
        
        </footer>
    )
}

