import { useEffect, useState } from "react"

export const useGet = (url) => {
    const [data, setData] = useState('')

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(url)
          const data = await res.json()

          setData(data)
        }
        fetchData()
    },[url])

    return {data}
}