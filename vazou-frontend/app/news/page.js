'use client'
import Form from '../components/form'

import Image from "next/image"
import CardEnterprise from "../components/cardEnterprise"
import Button from '../components/button'
import { useRouter } from 'next/navigation'
import RankingSection from '../components/rankingSection'

export default function News() {


  const router = useRouter();


  return (
    <main className='flex min-h-screen font-poppins bg-white'>

      
      <div>
        {/* Notícia principal - Início */}
        <div className="h-[25rem]">
          <div className={`relative h-96 w-[94.9rem] -inset-y-2 z-0`}>
            <Image src="/home/noticia_principal.png" fill />
          </div>  

          <div className=" relative -inset-y-40 z-10 px-80 text-white font-bold text-[3rem]">
            <div>
            Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
        </div>
        {/* Notícia principal - Fim */}
      
        <div className="flex flex-col ml-80">

          {/* Subtítulo - Inicio */}
          <div className="text-black-500 text-lg font-extrabold w-[75rem] mb-4">
          Lorem ipsum dolor sit amet consectetur. Gravida sapien montes eget viverra cursus duis neque. Velit ultrices eget netus erat mauris ut ultricies. 
          </div>

          <div className="text-black-500 text-sm font-extralight mb-4">
          dd/mm/aaaa 
          </div>
          
          <div>
                <Image
                    src={"/home/news_tiktok.png"}
                    width={68}
                    height={68}
                />
          </div>

          {/* Subtítulo - Fim */}


          {/* Texto - Inicio */}

          <div className="text-orange-500 text-2xl font-extrabold text-[5rem] mt-10 mb-7">
            L
          </div>

          <div className='text-sm text-justify w-[75rem] mb-3'>
              Consectetur varius in metus velit tellus tellus sem fermentum. A id sed semper cursus metus. Euismod posuere nisl lacus dui ipsum a faucibus. Tincidunt porttitor sed ultricies consequat. Eget parturient feugiat porttitor velit id sagittis. Amet et tortor potenti purus nibh congue. Pulvinar duis gravida porta ultrices turpis phasellus nisi massa.
          </div>
          
          <div className='text-sm text-justify w-[75rem] mb-3'>
              
              Scelerisque magna duis pharetra pellentesque lobortis morbi ipsum sed vitae. Nec enim magna ut quisque dictumst massa vitae praesent quis. Scelerisque nisi porttitor sem orci purus et parturient cursus malesuada. Egestas eleifend nam ridiculus neque aliquam vel libero ac. Dignissim tortor dignissim nunc quam. Vulputate est sit in non nisl. Pulvinar placerat dui posuere condimentum arcu sit purus feugiat tempor. Dolor quis tempor at dignissim ornare. Facilisis nec turpis diam nunc senectus gravida faucibus. Amet tempor est ultrices ante sagittis quis quisque eget. Porttitor at volutpat in bibendum massa tortor sed nibh. Eros vel in pulvinar pretium et habitasse viverra. Pretium ut pellentesque eget sed pellentesque. Ut cursus ac dolor interdum suscipit. In volutpat pharetra in pellentesque. Dictum quam scelerisque donec ultricies. Consequat sit neque ut aliquet purus proin sed.
           
          </div>

          <div className='text-sm text-justify w-[75rem] mb-10'>    
          Semper libero ut pellentesque sagittis velit vestibulum urna nec euismod. Urna egestas lobortis vulputate venenatis mauris id. Aliquet pellentesque ante eget dolor sagittis nunc vulputate tempus ligula. Nullam consectetur ullamcorper egestas nunc. Quis cras sit odio sit massa. Accumsan orci dictum in suspendisse vehicula facilisis rutrum. Turpis aliquam consectetur luctus id varius imperdiet arcu auctor purus. Vitae varius fermentum odio interdum ut aliquet sem. Risus lacus quam nullam sed porttitor interdum morbi. Sed ut lobortis cras velit suspendisse id ut. Aliquet augue facilisis id scelerisque diam ultricies. Pharetra adipiscing turpis nisl amet non. Egestas lorem consectetur luctus aenean eu ullamcorper ullamcorper. Et consectetur eu pellentesque sed lobortis nullam in ipsum. Egestas odio luctus et diam nibh. Tristique sit ornare elementum posuere faucibus dictum imperdiet fames. Non ridiculus nisi tincidunt aliquet risus. Posuere aliquam facilisi odio at enim vitae et sapien. Amet ornare adipiscing enim proin nisl.
          </div>
          {/* Texto - Fim */}

          <div>
                <Image
                    src={"/home/news_foto2.png"}
                    width={735}
                    height={385}
                />
          </div>
          

          {/* Texto2 - Início */}
          <div className='text-sm text-justify w-[75rem] mt-10 mb-3'>    
          Odio mi quis arcu sed. Sed risus sit enim pulvinar ultrices ut turpis. Duis amet semper sollicitudin amet velit eget neque integer turpis. Justo platea viverra feugiat at donec. Aenean non sapien gravida mi leo mattis. Fringilla iaculis turpis tellus ut semper. Purus vel quis dictumst porta elit amet aliquet dictumst at. Arcu dapibus tellus est neque vitae sit orci elit. Nunc volutpat ornare parturient euismod pharetra integer arcu. Neque ipsum nulla faucibus adipiscing quis ultrices diam. Accumsan nam cras nisl eu integer pharetra cras mattis. Metus ac vivamus iaculis integer. Tellus tristique praesent tristique est. Nisi lacus nulla amet eget. Tortor nulla posuere purus risus leo. Tempus viverra hendrerit in hendrerit amet suspendisse tempus at quam. At pellentesque amet facilisi egestas sit cum egestas ut molestie. Aliquam morbi elit malesuada massa leo. Eget feugiat auctor viverra mi egestas imperdiet egestas. Nunc ullamcorper commodo neque nisi lectus.
          </div>

          <div className='text-sm text-justify w-[75rem] mb-3'>    
          Massa tincidunt in sed laoreet quisque sed auctor. Aliquam sit dignissim lacus id enim vulputate euismod id. Risus ipsum pellentesque pellentesque pellentesque eget sed risus dui. In eget turpis donec justo. Tincidunt facilisi fermentum adipiscing tincidunt gravida duis enim enim imperdiet. Aliquam interdum molestie dignissim fusce vehicula odio. Et tellus faucibus diam nunc sit. Mi ipsum orci tortor in aliquam. Dignissim et fringilla iaculis congue eu. Dolor dolor nibh tellus venenatis urna. Massa ac diam pretium amet adipiscing at enim. Vulputate suspendisse velit sollicitudin nibh viverra nibh. Ullamcorper ornare mattis scelerisque sed aenean urna. Pharetra sit placerat in tempor risus euismod. Dictum urna pretium tincidunt vestibulum vitae sit velit quis. Tellus amet purus habitasse sollicitudin. Risus sociis duis cras id nibh vitae aliquet felis. Quis suscipit urna molestie felis etiam nibh consectetur egestas libero.
          </div>

          <div className='text-sm text-justify w-[75rem] mb-10'>    
          Massa tincidunt in sed laoreet quisque sed auctor. Aliquam sit dignissim lacus id enim vulputate euismod id. Risus ipsum pellentesque pellentesque pellentesque eget sed risus dui. In eget turpis donec justo. Tincidunt facilisi fermentum adipiscing tincidunt gravida duis enim enim imperdiet. Aliquam interdum molestie dignissim fusce vehicula odio. Et tellus faucibus diam nunc sit. Massa tincidunt in sed laoreet quisque sed auctor. Aliquam sit dignissim lacus id enim vulputate euismod id. Risus ipsum pellentesque pellentesque pellentesque eget sed risus dui. In eget turpis donec justo. Tincidunt facilisi fermentum adipiscing tincidunt gravida duis enim enim imperdiet. Aliquam interdum molestie dignissim fusce vehicula odio. Et tellus faucibus diam nunc sit. Aliquam sit dignissim lacus id enim vulputate euismod id. Aliquam sit dignissim lacus id enim vulputate euismod id.
          </div>
          {/* Texto2 - Fim */}


          {/* Veja Mais - Início */}
          <div>
                <Image
                    src={"/home/news_divLaranja.png"}
                    width={146}
                    height={19}
                />
          </div>


          <div className="text-black-500 text-lg font-extrabold mt-5 mb-5">
                Veja também
          </div>
          
          <div className="flex flex-row">
            <Image
              src={"/home/news_vejatbm1.png"}
              width={632}
              height={406}
            />
            <Image
              src={"/home/news_vejatbm2.png"}
              width={632}
              height={406}
            />
            <Image
              src={"/home/news_vejatbm3.png"}
              width={632}
              height={406}
            />
          </div>

          <div className="mt-20 ">
          </div>

          {/* Veja Mais - Fim */}

        </div>
        

      </div>
    </main>
  )
}

