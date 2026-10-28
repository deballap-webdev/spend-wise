import axios from "axios"
import store from "../store"
const currencyApi = async (date, quote) => {
    const currentState = store.getState()
    const cache = currentState.ratesCache.cache
    if (cache[date]) {
        return cache[date]
    }
    try {
        const response = await axios.get(`https://api.frankfurter.app/${date}?base=USD&quotes=${quote}`)
        return response.data
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else {
            console.log(err.stack)
        }
    }
}