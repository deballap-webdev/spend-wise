import { useState, useEffect } from "react";
import axios from "axios";
const useAxiosFetch = (dataUrl) => {
    const [isLoading, setIsLoading] = useState(false)
    const [fetchError, setFetchError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        let isMounted = true;
        const fetchData = async (url) => {
            setIsLoading(true)
            try {
                const response = await axios.get(url, {
                    signal: controller.signal
                })
                if (isMounted) {
                    setData(response.data)
                    setFetchError(null)
                }
            } catch (err) {
                if (isMounted) {
                    setData([])
                    setFetchError(err.message)
                    console.log(err.message)
                }
            } finally {
                isMounted && setIsLoading(false)
            }
        }
        fetchData(dataUrl)
        const cleanUp = () => {
            isMounted = false;
            controller.abort()
        }
        return cleanUp
    }, [dataUrl, setFetchError])
    return { isLoading, fetchError, data }
}


export default useAxiosFetch