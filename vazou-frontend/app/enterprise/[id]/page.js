"use client"

import { useEffect } from "react"

export default function EnterpriseId({ params }){

    useEffect(() => {
        console.log(params)
    },[])

    return (
        <div>
            EmpresaId: {params.id}
        </div>
    )
}