import { useEffect, useState, useContext } from "react"

// Context
import {LoadingContext} from '../context/LoadingContext'

export const useGet = (url) => {
    const {setLoading} = useContext(LoadingContext)

    const [data, setData] = useState('')

    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true)

            const res = await fetch(url)
            const data = await res.json()

            setData(data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
    },[])

    return {data}
}