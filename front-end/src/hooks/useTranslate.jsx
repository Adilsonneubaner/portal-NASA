import { useEffect, useState, useContext } from "react"

// Context
import {LoadingContext} from '../context/LoadingContext'

export const useTranslate = (text) => {
    const {setLoading} = useContext(LoadingContext)

    const url_back_end = 'https://portal-nasa.onrender.com/translate'

    const [translation, setTranslation] = useState('')

    useEffect(() => {
        async function fetchTranslate() {
          if(!text){
            return
          }

          try {
            const res = await fetch(url_back_end, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: text,
                    target_lang: 'PT-BR'
                })
            }) 
            
            const data = await res.json()
            setTranslation(data)

          } catch (error) {
            console.log(error)
          }
        }
        fetchTranslate()
    },[JSON.stringify(text)])

    return {translation}
}