import { useState } from 'react'
import Input from './input'
import Button from './button'

export default function Form(){

    const [nome, setNome] = useState("")
    const [email,setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [descrip, setDescrip] = useState("")


    return (
        <div className=' flex flex-col items-center mx-auto font-poppins'>
            <Input title="Nome" type="Nome" value={nome} setValue={setNome} />
            <Input title="E-mail" type="E-mail" value={email} setValue={setEmail} />
            <Input title="Assunto" type="Assunto" value={assunto} setValue={setAssunto} />
            <div className='mt-3'>
                <h4 className=" mr-auto font-semibold">Descrição</h4>
                <textarea className=' border-[2px] border-black rounded shadow p-2 w-[580px] h-[180px]' placeholder='Descrição'  value={descrip} onChange={(e)=> setDescrip(e.target.value)}></textarea> 
            </div>
            <Button>
                Enviar
            </Button>
        </div>
    )
}