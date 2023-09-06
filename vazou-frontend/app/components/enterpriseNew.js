import Image from "next/image";
import Link from "next/link";

export default function EnterpriseNews({news}){

    return(
        <Link href={`/news/${news.id}`}>
            
              <div className="w-[292px] h-[182px] flex items-end text-transparent hover:bg-orange-500 hover:bg-opacity-50 hover:text-white hover:text-opacity-100 hover:cursor-pointer z-10 absolute p-2">
                {news.title}
              </div>
              <Image
                src={news.fst_image}
                width={300}
                height={400}
                className="w-[292px] h-[182px] mr-2"
              />
            </Link>
    )
}