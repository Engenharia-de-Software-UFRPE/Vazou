import Image from "next/image";
import CardEnterprise from "../components/cardEnterprise";
import SearchBar from "../components/searchbar";
import Dropdown from "../components/dropdown";
import Link from "next/link";
import rankingName from "@/func/rankingName";

async function getEnterprise() {
    const res = await fetch(`http://127.0.0.1:8000/empresas`, { cache: 'no-store' })
    return res.json()
}

export default async function Enterprise({searchParams}){

    const enterpriseData = getEnterprise()
    const [enterprise] = await Promise.all([enterpriseData])

    const hasRanking = searchParams.ranking !== "" && searchParams.ranking != null;

    const hasCategory = searchParams.category !== "" && searchParams.category != null;

    function CategoryName(category){
        switch(category){
            case "Transporte": return "Transporte";
            case "Educação": return "Education";
            case "Rede Social": return "SocialMedia";
            case "Entretenimento": return "Entretenimento";
            case "Varejo": return "Varejo";
            case "Tecnologia": return "Tecnologia";

        }
    
    }

    return (
        <div  className='flex flex-col min-h-screen bg-white'>
            <div className="bg-orange-500 min-w-full h-32 flex items-center ">
                <SearchBar />
            </div>

            <div className="flex px-80 my-4 justify-between">
                <div className="flex flex-row shadow-xl border-black border-opacity-5 rounded-md p-4 bg-slate-50">
                    <Link href={hasRanking && searchParams.ranking == "Danger"? "enterprise" :"enterprise?ranking=Danger"}>
                        <Image 
                            src={"/ranking_icons/Danger.png"}
                            width={50}
                            height={50}
                            className={hasRanking && searchParams.ranking == "Danger" ? " cursor-pointer opacity-100 hover:opacity-60 mr-3" : " opacity-60 hover:opacity-100 mr-3 cursor-pointer"}
                        />
                    </Link>
                    <Link href={hasRanking && searchParams.ranking == "Alert"? "enterprise" : "enterprise?ranking=Alert"}>
                        <Image 
                            src={"/ranking_icons/Alert.png"}
                            width={50}
                            height={50}
                            className={hasRanking && searchParams.ranking == "Alert" ? " cursor-pointer opacity-100 hover:opacity-60 mr-3" : " opacity-60 hover:opacity-100 mr-3 cursor-pointer"}
                        />
                    </Link>
                    <Link href={hasRanking && searchParams.ranking == "Atention"? "enterprise" :"enterprise?ranking=Atention"}>
                        <Image 
                            src={"/ranking_icons/Atention.png"}
                            width={50}
                            height={50}
                            className={hasRanking && searchParams.ranking == "Atention" ? " cursor-pointer opacity-100 hover:opacity-60 mr-3" : " opacity-60 hover:opacity-100 mr-3 cursor-pointer"}
                        />
                    </Link>
                    <Link href={hasRanking && searchParams.ranking == "Great"? "enterprise" : "enterprise?ranking=Great"}>
                        <Image 
                            src={"/ranking_icons/Great.png"}
                            width={50}
                            height={50}
                            className={hasRanking && searchParams.ranking == "Great" ? " cursor-pointer opacity-100 hover:opacity-60 mr-3" : " opacity-60 hover:opacity-100 mr-3 cursor-pointer"}
                        />
                    </Link>
                </div>
                <Dropdown />
            </div>

            <div className="flex flex-col justify-center items-center">
                {
                    hasRanking ? enterprise.filter(e => rankingName(e.score) == searchParams.ranking).map( e => (
                        <CardEnterprise enterprise={e} />
                    )) : hasCategory ? enterprise.filter(e => CategoryName(e.categoria) == searchParams.category).map( e => (
                        <CardEnterprise enterprise={e} />  
                    )) : enterprise.map( e => ( <CardEnterprise enterprise={e} /> 
                    ))
                }
                

            </div>
        </div>
    )
}