import Image from "next/image";
import Link from "next/link";


export default function Footer (){
    return (
        <div className="flex flex-row min-w-full  justify-around items-center font-poppins  bg-black text-white py-4">
            <div className="flex flex-col my-4">
                <Link href={'/'}>
                    <div className=''>
                        <Image 
                            src={'/vazou_white_logo.png'} 
                            width={100}
                            height={100}
                        />
                    </div>
                </Link>
                <div className="my-2 mt-3 ml-1">
                    Contato
                </div>
                <div className=" text-xs mb-1 ml-1">
                    Lorem ipsum dolor sit amet
                </div>
                <div className=" text-xs mb-1 ml-1">
                    Lorem ipsum dolor sit amet
                </div>
                <div className=" text-xs ml-1">
                    Lorem ipsum dolor sit amet
                </div>
            </div>
            
            <div className='flex flex-col items-center px-2'>
                <div className="flex flex-row items-center">
                 
                    <Image
                        src={'/face_icon.svg'}
                        width={35}
                        height={35}
                        className="mr-1"
                    />
                    <Image
                        src={'/twitter_icon.svg'}
                        width={35}
                        height={35}
                        className="mr-1"
                    />
                    <Image
                        src={'/insta_icon.svg'}
                        width={35}
                        height={35}
                    />
                    
                </div>
                <div className="text-xs">
                    Acompanhe a gente!
                </div>
            </div>
        </div>
    )
}