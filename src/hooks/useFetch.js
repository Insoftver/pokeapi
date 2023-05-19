import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
      }
      
      fetchData()
    }, [url])

    return {data, loading, error}
}