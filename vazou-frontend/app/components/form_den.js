'use client' 

import { useState } from 'react'
import InputDenuncia from './input_den'
import Button from './button'
import Modal from './modal'

export default function FormDenuncia(){

    const [nome, setNome] = useState("")
    const [assunto, setAssunto] = useState("")
    const [descrip, setDescrip] = useState("")
    const [isBlankFilled, setIsBlankFilled] = useState("notShow")

    function submitForm () {
        setNome("")
        setAssunto("")
        setDescrip("")
        if (assunto !== "" && descrip !== "") {
            setIsBlankFilled ("showSuccess")
        } else{
            setIsBlankFilled("showFail")
        }
    }

    function closeModal (setModalClosed) {
        setModalClosed ("notShow")
    }

    return (
        <div className=' flex flex-col items-center mx-auto font-poppins'>
            <InputDenuncia title="Nome" type="Nome" value={nome} setValue={setNome} />
            <InputDenuncia title="Assunto*" type="Assunto" value={assunto} setValue={setAssunto} />
            <div className='mt-3'>
                <h4 className=" mr-auto font-semibold">Descrição*</h4>
                <textarea className=' border-[2px] border-black rounded shadow p-2 w-[580px] h-[180px]' placeholder='Descrição'  value={descrip} onChange={(e)=> setDescrip(e.target.value)}></textarea> 
            </div>
            <Button onClickFunction={() => submitForm()} backgroundColor={'bg-black'}>
                Enviar
            </Button>
            {isBlankFilled === "showSuccess" ? <Modal leftButtonAction={() => closeModal(setIsBlankFilled)} title={"Denúncia feita com sucesso!"} leftButtonText={"Ok"}></Modal> : isBlankFilled === "showFail" ? <Modal leftButtonAction={() => closeModal(setIsBlankFilled)} title={"Nem todos os campos foram preenchidos!"} leftButtonText={"Ok"}></Modal> : ""}
        </div>
    )
}