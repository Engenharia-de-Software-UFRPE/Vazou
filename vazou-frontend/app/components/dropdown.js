'use client'
import { useState } from "react";

export default function Dropdown() {

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
    )
}