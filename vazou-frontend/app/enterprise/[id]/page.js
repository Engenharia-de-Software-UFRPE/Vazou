import Image from "next/image";
import SearchBar from "../../components/searchbar";
import EnterpriseNews from "@/app/components/enterpriseNew";
import rankingName from "@/func/rankingName";


async function getEnterprise(id) {
    const res = await fetch(`http://127.0.0.1:8000/empresas/get/${id}`, { cache: 'no-store' })
    return res.json()
}


async function getNews(id) {
    const res = await fetch(`http://127.0.0.1:8000/noticias?company=${id}`, { cache: 'no-store' })
    return res.json()
}



export default async function Enterprise({ params }){

    const enterpriseData = getEnterprise(params.id)
    const [enterprise] = await Promise.all([enterpriseData]);
    const newsData = getNews(params.id)
    const [news] = await Promise.all([newsData]);


    return (
        <>
            <div className= 'w-full bg-orange-500' style={{minHeight: '26vh', padding: 30}}>
{/*                 <SearchBar></SearchBar> */}
            </div>
            <div className='flex min-h-screen flex-col w-3/5 mx-auto'>
                <div className= 'flex justify-between items-center -mt-20 mb-20 self-center'style={{minWidth: 650}}>
                    <div className= 'flex justify-center items-center'>
                    <Image src={`/images/Empresa/${enterprise.tradeName.toLowerCase()}.png`} className= 'border-4 border-white' width={156}  height={156}/>    
                        <div className="font-poppins text-white text-4xl font-extrabold self-start ml-4 mt-4">
                            {enterprise.tradeName}
                        </div>
                    </div>
                    
                    <div className= 'flex gap-4 self-center'>
                    <Image className={rankingName(enterprise.score) == "Danger" ? "": "opacity-30"} src={"/ranking_icons/Danger.png"} width={48} height={48} />
                    <Image className={rankingName(enterprise.score) == "Alert" ? "": "opacity-30"}  src={"/ranking_icons/Alert.png"} width={48} height={48}/>
                    <Image className={rankingName(enterprise.score) == "Atention" ? "": "opacity-30"}  src={"/ranking_icons/Atention.png"} width={48}  height={48}/>
                    <Image className={rankingName(enterprise.score) == "Great" ? "": "opacity-30"}  src={"/ranking_icons/Great.png"}  width={48} height={48}/>
                    </div>
                </div>

                <p>
                    {enterprise.abstract}
                </p>

                <div className="flex flex-col items-center">
                    <h2 className="self-start text-orange-500 text-2xl font-extrabold mb-6 mt-8">
                        Notícias
                    </h2>
                    <div className="flex gap-4 items-center flex-wrap w-full">
                        {news.map(n => 
                            <EnterpriseNews news={n} />
                            )}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="self-start text-orange-500 text-2xl font-extrabold mb-6 mt-10">
                        Ações da empresa
                    </h2>
                    <div>
                        <h3 className="self-start text-xl font-extrabold mb-4">
                            Ação da empresa
                        </h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.
                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.

                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.
                        </p>
                    </div>
                    <div>
                        <h3 className="self-start text-xl font-extrabold mb-4">
                            Ação da empresa
                        </h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.
                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.

                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.
                        </p>
                    </div>
                    <div>
                        <h3 className="self-start text-xl font-extrabold mb-4">
                            Ação da empresa
                        </h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.
                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.

                            Lorem ipsum dolor sit amet consectetur. Congue nisl eu arcu quis habitasse pharetra. Eu molestie netus et rhoncus egestas. Vel sit semper eleifend sed imperdiet consectetur sollicitudin. Velit facilisi egestas cursus tellus eget eget ut et enim. Dictum lacus amet non eget purus habitasse dignissim odio facilisi.
                        </p>
                    </div>
                </div>
                
               
            </div>
        </>
    )
}