import axios from "axios"
import store from "../store"
import { parseISO } from "date-fns"
const currencyApi = async (date, quote) => {
    const state = store.getState()
    const cache = state.ratesCache.cache
    const todayStr = new Date().toISOString().split('T')[0]
    const ratesDate = parseISO(todayStr).getTime() <= parseISO(date).getTime() ? date : todayStr
    if (cache[date]) {
        return cache[date]
    }
    try {
        const response = await axios.get(`https://api.frankfurter.dev/v2/rates?base=USD&quotes=${quote}&from=${ratesDate}&to=${ratesDate}`)
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
            return {
                data: err.response.data,
                status: err.response.status,
                headers: err.response.headers,
                err: true
            }
        } else {
            return {
                stack: err.stack,
                message: err.message,
                err: true
            }
        }
    }
}

export default currencyApi