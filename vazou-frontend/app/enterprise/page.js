'use client'
import Image from "next/image";
import CardEnterprise from "../components/cardEnterprise";
import SearchBar from "../components/searchbar";
import { useState } from "react";


export default function Enterprise(){

    const [dropdown, setDropdown] = useState(false);

    const DropdownAction = () => {
        const dropTest = !dropdown;

        if(dropTest){
            document.getElementById("dropdown").classList.remove("hidden");
        } else{
            document.getElementById("dropdown").classList.add("hidden");
        }

        setDropdown(!dropdown);
        
    }

    return (
        <div  className='flex flex-col min-h-screen bg-white'>
            <div className="bg-orange-500 min-w-full h-56 flex items-center ">
                <SearchBar />
            </div>

            <div className="flex px-80 my-4 justify-between">
                <div className="flex flex-row shadow-xl border-black border-opacity-5 rounded-md p-4 bg-slate-50">
                    <Image 
                        src={"/ranking_icons/Danger.png"}
                        width={50}
                        height={50}
                        className="cursor-pointer mr-3"
                    />
                    <Image 
                        src={"/ranking_icons/Alert.png"}
                        width={50}
                        height={50}
                        className="cursor-pointer mr-3"
                    />
                    <Image 
                        src={"/ranking_icons/Atention.png"}
                        width={50}
                        height={50}
                        className="cursor-pointer mr-3"
                    />
                    <Image 
                        src={"/ranking_icons/Great.png"}
                        width={50}
                        height={50}
                        className=" cursor-pointer"
                    />
                </div>
                <div className="">
                    <div className="flex items-center shadow-xl border-black border-opacity-5 rounded-t-md p-4 cursor-pointer" 
                        onClick={() =>DropdownAction()}
                    >
                        Área de atuação
                         <div className=" text-orange-500">
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                         </div>
                    </div>
                    <div id="dropdown" className="absolute bg-white divide-gray-100 rounded-b-md shadow w-44 hidden">
                        <ul className="py-2 ">
                            <li className="block px-4 py-2 hover:bg-gray-100">
                                <a>Redes Sociais</a>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-100">
                                <a>Indústrias</a>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-100">
                                <a>Varejo</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <CardEnterprise />

            </div>
        </div>
    )
}