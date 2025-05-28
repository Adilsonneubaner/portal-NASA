import { useEffect, useState } from "react"

export const useTranslate = (text) => {
    const url_back_end = 'http://localhost:3000/translate'

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