"use client";
import Image from "next/image";
import Input from "../components/input";
import { useState } from "react";
import Button from "../components/button";
import { data } from "autoprefixer";


export default function Anews(){

    const [companyList, setCompanyList] = useState(['Facebook', 'Tiktok', 'Twitter'])
     
    const [newsInput, setNewsInput] = useState({
        title: '',
        subtitle: '',
        date: '',
        text: '',
        company: '',
        capa: '',
        textBody: '',

    })

    const handleChange = async (value, type) => {
        console.log(value)
        console.log(type)
        setNewsInput(prev => ({...prev, [type]: value}));
    };

    return (     

        <div className='flex flex-col w-1/2 mx-auto font-poppins'>

            
        <input className=' p-2 w-[928px] h-[36px] border-[2px] bg-white rounded shadow mb-6 mt-20 border-black rounded' type="text" placeholder="Título" value={newsInput.title} onChange={(e) => handleChange(e.target.value, "title")}/>
        <input className=' p-2 w-[928px] h-[36px] border-[2px] bg-white rounded shadow mb-6 border-black rounded' type="text" placeholder="Subtítulo" value={newsInput.subtitle} onChange={(e) => handleChange(e.target.value, "subtitle")}/>
        <input className=' p-2 w-[160px] h-[30px] border-[2px] bg-white rounded shadow mb-6 border-black rounded ' type="date" placeholder="Data" value={newsInput.date} onChange={(e) => handleChange(e.target.value, "date")}/>
        <textarea className='w-[928px] h-[548px]  mb-6 border-[2px] border-black rounded shadow ' placeholder=" Texto" value={newsInput.text} onChange={(e) => handleChange(e.target.value, "text")}/>
        
        
        <select className= 'border shadow-md text-black py-2 px-4 pr-8 rounded mb-6 w-[251px] h-[40px] flex justify-start'>
            <option value="">Selecionar empresa</option>
            {companyList.map((company) => { return (
                <option value={company}>{company}</option>
             )})}
        </select>

        <input className=' p-2 w-[284px] h-[46px] border-[2px] bg-white rounded mb-6 shadow-md block text-sm  cursor-pointer ' type="file" placeholder="Adicionar imagem de capa" onChange={(e) => handleChange(e.target.value, "capa")}/>
        <input className=' p-2 w-[335px] h-[46px] border-[2px] bg-white rounded mb-6 shadow-md block text-sm cursor-pointer' type="file" placeholder="Adicionar imagem: corpo de texto" onChange={(e) => handleChange(e.target.value, "textBody")}/>

          <div className='flex justify-center w-75 mb-10'>
            <Button onClickFunction={() => submitNews()} backgroundColor={'bg-orange-500 w-100'}>
                Publicar
            </Button>
          </div>
              
       </div>
    )    
        }