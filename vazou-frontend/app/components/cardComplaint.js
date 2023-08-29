import Image from "next/image";

export default function cardComplaint(){

    return (
        <div className="flex flex-row w-[56rem] justify-between px-4 py-3  my-2 border border-black border-opacity-5 rounded-md shadow-lg bg-slate-50">
            <div className="flex flex-row">
                <div className="flex flex-col justify-center ml-2">
                    <div className=" font-bold font-poppins text-lg">
                        Empresa
                    </div>
                    <div className=" text-xs font-poppins font-semibold text-[#605D5D] mb-3">
                        31/07/23
                    </div>
                    <div className="text-sm mg">
                        Odio mi quis arcu sed. Sed risus sit enim pulvinar ultrices ut turpis. Duis amet semper sollicitudin amet velit eget neque integer turpis. Justo platea viverra feugiat at donec. Aenean non sapien gravida mi leo matti...
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center mt-4 px-4">
            <div className=" font-medium font-poppins text-base whitespace-nowrap text-red-500">
                        Não lido
                    </div>
                <div className="">
                    <div className="flex items-center  rounded-t-md p-4 cursor-pointer" 
                        //onClick={() =>DropdownAction()}
                    >
                     <div className=" text-black">
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                         </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}