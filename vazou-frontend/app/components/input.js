

export default function Input({title,type,value, setValue}){
    return(
        <div className="flex flex-col items-center py-3 font-poppins">
            <h4 className=" mr-auto font-semibold">{title}</h4>
            <input value={value} onChange={(e)=> setValue(e.target.value)} placeholder={type} className=" p-2 w-[580px]  h-10 border-[2px] bg-white border-black rounded shadow "></input>
        </div>
    )
}