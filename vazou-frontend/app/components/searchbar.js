import Image from "next/image";

export default function SearchBar() {
    return(
        <div className="bg-white shadow-md mx-auto p-2 w-[580px] h-10 flex flex-row rounded my-8">
            <Image className=" justify-start "
                src={'/search.svg'} 
                width={20}
                height={20}
            >
            </Image>
            <input className=" justify-start  w-[580px] ml-4 p-3 outline-none" type="search" placeholder="Pesquisar" >
            
            </input>
        </div>
    )
}
