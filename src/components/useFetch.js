import { useState, useEffect } from "react"


const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    //console.log(AbortCont.signal);
  
    useEffect(() => {
      const abortCont = new AbortController()
      setTimeout(() => {
        fetch(url, { signal:abortCont.signal })
          .then(res => {
            if (!res.ok) {
              throw Error("Failed to fetch data from the resources")
            }
            setIsLoading(false)
            return res.json()
            
          })
          .then(data => {
            setData(data)
            setIsLoading(false)
          })
          .catch(err => {
            if (err.name === "AbortError") {
              setIsLoading(false)
            } else {
              setError(err.message);
              setIsLoading(false)
            }
            
          })
      }, 1000);
      
      return () => {
        abortCont.abort();
      };
    }, [url])
    
    return ({ data, error, isLoading })
}

export default UseFetch