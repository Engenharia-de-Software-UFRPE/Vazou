import Image from "next/image";

export default function CardEnterprise(){

    return (
        <div className=" flex flex-row px-2 py-2 m-4 justify-center items-center">
            <div className="flex flex-col justify-center items-center px-2 py-2 m-2">
                <Image
                    className=" shadow-lg mb-2"
                    src={"/home/enterprise_example.png"}
                    width={92}
                    height={92}
                />
                <h2 className="text-xs font-semibold">Nome da Empresa</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-2 m-2">
                <Image
                    className=" shadow-lg mb-2"
                    src={"/home/enterprise_example.png"}
                    width={92}
                    height={92}
                />
                <h2 className="text-xs font-semibold">Nome da Empresa</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-2 m-2">
                <Image
                    className=" shadow-lg mb-2"
                    src={"/home/enterprise_example.png"}
                    width={92}
                    height={92}
                />
                <h2 className="text-xs font-semibold">Nome da Empresa</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-2 m-2">
                <Image
                    className=" shadow-lg mb-2"
                    src={"/home/enterprise_example.png"}
                    width={92}
                    height={92}
                />
                <h2 className="text-xs font-semibold">Nome da Empresa</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-2 m-4">
                <Image
                    className=" shadow-lg mb-2"
                    src={"/home/enterprise_example.png"}
                    width={92}
                    height={92}
                />
                <h2 className="text-xs font-semibold">Nome da Empresa</h2>
            </div>
            <div className="flex flex-col justify-center items-center px-2 py-2 m-4">
                <Image
                    className=" shadow-lg mb-2"
                    src={"/home/enterprise_example.png"}
                    width={92}
                    height={92}
                />
                <h2 className="text-xs font-semibold">Nome da Empresa</h2>
            </div>
        </div>
    )
}