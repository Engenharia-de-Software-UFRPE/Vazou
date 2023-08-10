export default function Button ({type = 'button', children, isActive}){
    return (
        <button type={type} className={` m-4 font-poppins w-[140px] h-[40px] text-white  bg-black rounded shadow hover:bg-white hover:text-black hover:border-[2px] hover:border-black `}>
            {children}        
        </button>
    )
}