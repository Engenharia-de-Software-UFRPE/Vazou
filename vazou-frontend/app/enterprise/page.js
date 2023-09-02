import Image from "next/image";
import CardEnterprise from "../components/cardEnterprise";
import SearchBar from "../components/searchbar";
import Dropdown from "../components/dropdown";

async function getEnterprise() {
    const res = await fetch(`http://127.0.0.1:8000/empresas`)
    return res.json()
  }

export default async function Enterprise(){

    const enterpriseData = getEnterprise()
    const [enterprise] = await Promise.all([enterpriseData])


    

    return (
        <div  className='flex flex-col min-h-screen bg-white'>
            <div className="bg-orange-500 min-w-full h-32 flex items-center ">
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
                <Dropdown />
            </div>

            <div className="flex flex-col justify-center items-center">
                {
                    enterprise.map( e => (
                        <CardEnterprise enterprise={e} />
                    ))
                }
                

            </div>
        </div>
    )
}