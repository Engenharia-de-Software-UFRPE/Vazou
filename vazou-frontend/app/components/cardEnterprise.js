import Image from "next/image";
import Link from "next/link";
import rankingImage from "@/func/rankingImage";

export default function CardEnterprise({enterprise}){


    return (
        <Link href={`enterprise/${enterprise.id}`}>
        <div className="flex flex-row w-[56rem] justify-between px-4 py-3  my-2 border border-black border-opacity-5 rounded-md shadow-lg bg-slate-50 hover:bg-black hover:bg-opacity-5">
            
                <div className="flex flex-row">
                    <div>
                        <Image
                            src={enterprise.perfil_image}
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
                        src={rankingImage(enterprise.score)}
                        width={48}
                        height={48}
                    />
                </div>
            
            
        </div>
        </Link>
    )
}