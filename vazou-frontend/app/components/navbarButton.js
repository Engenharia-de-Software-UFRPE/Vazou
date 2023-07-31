import Link from "next/link";

export default function NavbarButton({text, link, isActive}){

    return (

        <Link href={link}>
            <div className={`px-4 mx-2 h-10 flex items-center rounded-sm hover:bg-white hover:text-black ${isActive ? ' bg-white text-black' : ''}`} >{text}</div>
        </Link>
    )
}