import Button from "./button";

export default function Modal ({leftButtonText, rightButtonText, title, leftButtonAction, rightButtonAction}){
    return (
        <div className={'modal absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl'}>
            <div className={'modal-content bg-white flex justify-center items-center flex-col px-12 py-8'}> 
                <p className={'font-poppins mb-4'}>
                    {title}
                </p>
                <div className={'flex justify-end'}> 
                    <Button backgroundColor={"bg-orange-500"} onClickFunction={() => leftButtonAction()}>
                        {leftButtonText}
                    </Button>
                    { rightButtonText !== undefined ?
                        <Button backgroundColor={"bg-red-500"} onClickFunction={() => rightButtonAction()}>
                            {rightButtonText}
                        </Button> :
                        ""
                    } 
                </div>
            </div>     
        </div>
    )
}