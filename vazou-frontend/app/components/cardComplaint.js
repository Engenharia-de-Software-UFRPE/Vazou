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
        </div>
    )
}