import Image from "next/image";

export default function CardEnterprise({enterprise}){

    console.log()

    return (
        <div className="flex flex-row w-[56rem] justify-between px-4 py-3  my-2 border border-black border-opacity-5 rounded-md shadow-lg bg-slate-50">
            <div className="flex flex-row">
                <div>
                    <Image
                        src={"/home/enterprise_example.png"}
                        width={92}
                        height={92}
                    />
                </div>
                <div className="flex flex-col justify-center ml-5">
                    <div className=" font-semibold text-lg">
                        {enterprise.tradeName}
                    </div>
                    <div className=" text-sm">
                       {enterprise.categoria}
                    </div>
                    <div className=" text-xs">
                        00 denúncias de vazamento
                    </div>
                </div>
            </div>

            <div className=" flex items-center px-4">
                <Image
                    src={"/ranking_icons/Danger.png"}
                    width={48}
                    height={48}
                />
            </div>
        </div>
    )
}