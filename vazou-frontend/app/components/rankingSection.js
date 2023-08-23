import Image from "next/image";

export default function RankingSection ({imageName, type}){

    return (
        <div className='flex m-4'>
            <div className='flex items-center'>
                <Image 
                  src={imageName}
                  width={56}
                  height={56}
                />
              </div>
              <div className='w-[18.5rem] mx-4 text-sm font-light'>
                <div> {type} </div>
                <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </div>
              </div>
        </div>
        
    )

}