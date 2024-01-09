import { useEffect, useState, useRef } from "react"


export const useFetch = (url, options) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const optionsRef = useRef(options)

  useEffect(() => {
    
    const controller = new AbortController()
    const fetchData = async () => {

      try {
        setLoading(true)
        const res = await fetch(url, {
          ...optionsRef.current,
          signal: controller.signal
        })
        
        if(!res.ok) {
          throw new Error( res.status, res.statusText)
        }

        const json = await res.json()

        console.log(json)
        setData(json)
        setError(null)
        setLoading(false)
        
      } catch(err) {
        if(err.name === 'AbortError') {
          console.log('Fetch aborted')
        } else {
          console.log(err)
          setError('something went wrong!')
          setLoading(false)
        }
      }

    }

    fetchData()


    return () => {
      controller.abort()
    }
  }, [url, optionsRef])


  return { data, loading, error }
}