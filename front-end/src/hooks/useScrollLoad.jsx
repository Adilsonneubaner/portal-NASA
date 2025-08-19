import { useEffect } from "react"

export const useScrollLoad = (load) => {

    useEffect(() => {
    load.current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
    },[])

}