export default function Button ({type = 'button', children, isActive, backgroundColor, onClickFunction}){
    return (
        <button type={type} onClick={() => onClickFunction()} className={`m-4 font-poppins w-[140px] h-[40px] text-white ${backgroundColor} rounded shadow hover:bg-white hover:text-black hover:border-[2px] hover:border-black`}>
            {children}        
        </button>
    )
}