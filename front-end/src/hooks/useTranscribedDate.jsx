import { useEffect, useState } from "react"

export const useTranscribedDate = (date) => {
    const [transcribedDate, setTranscribedDate] = useState('')
    
    useEffect(() => {
        if(!date){
            return
        }

        const objetctDate = new Date(date)
        const formated = objetctDate.toLocaleDateString('pt-BR')

        setTranscribedDate(formated)
    },[date])
    
    return {transcribedDate}
}