import axios from "axios"
import store from "../store"
const currencyApi = async (date, quote) => {
    const state = store.getState()
    const cache = state.ratesCache.cache
    if (cache[date]) {
        return cache[date]
    }
    try {
        const response = await axios.get(`https://api.frankfurter.dev/v2/rates?base=USD&quote=${quote}&from=${date}&to=${date}`)
        let rates = {};

        for (let i = 0; i < response.data.length; i++) {
            rates[`${response.data[i].quote}`] = response.data[i].rate
        }
        return rates
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

export default currencyApi