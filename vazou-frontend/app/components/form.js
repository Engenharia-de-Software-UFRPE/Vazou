import { useState } from 'react'
import Input from './input'
import Button from './button'
import Modal from './modal'

export default function Form(){

    const [nome, setNome] = useState("")
    const [email,setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [descrip, setDescrip] = useState("")
    const [isBlankFilled, setIsBlankFilled] = useState("notShow")

    function submitForm () {
        setNome("")
        setEmail("")
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
        <div className=' flex flex-col items-center font-poppins'>
            <Input title="Nome" type="Nome" value={nome} setValue={setNome} />
            <Input title="E-mail" type="E-mail" value={email} setValue={setEmail} />
            <Input title="Assunto*" type="Assunto" value={assunto} setValue={setAssunto} />
            <div className='mt-3'>
                <h4 className=" mr-auto font-semibold">Descrição*</h4>
                <textarea className=' rounded shadow p-2 w-[360px] h-[140px]' placeholder='Descrição'  value={descrip} onChange={(e)=> setDescrip(e.target.value)}></textarea> 
            </div>
            <Button onClickFunction={() => submitForm()} backgroundColor={'bg-black'}>
                Enviar
            </Button>
            {isBlankFilled === "showSuccess" ? <Modal leftButtonAction={() => closeModal(setIsBlankFilled)} title={"Denúncia feita com sucesso!"} leftButtonText={"Ok"}></Modal> : isBlankFilled === "showFail" ? <Modal leftButtonAction={() => closeModal(setIsBlankFilled)} title={"Nem todos os campos foram preenchidos!"} leftButtonText={"Ok"}></Modal> : ""}
        </div>
    )
}