import { useEffect, useState, useContext } from "react"

// Context
import {LoadingContext} from '../context/LoadingContext'

export const useTranscribedDate = (date) => {
    const [transcribedDate, setTranscribedDate] = useState('')

    const {setLoading} = useContext(LoadingContext)
    
    useEffect(() => {
        if(!date){
            return
        }

        const objetctDate = new Date(date)
        const formated = objetctDate.toLocaleDateString('pt-BR')

        setTranscribedDate(formated)

        setLoading(false)
    },[date])
    
    return {transcribedDate}
}