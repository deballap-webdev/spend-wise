import { isThisYear, parseISO } from "date-fns"
import convCurrency from "./convCurrency"
const monthlyTotals = {
    "jan": {
        income: 0,
        expense: 0,
    },
    "feb": {
        income: 0,
        expense: 0,
    },
    "mar": {
        income: 0,
        expense: 0,
    },
    "apr": {
        income: 0,
        expense: 0,
    },
    "may": {
        income: 0,
        expense: 0,
    },
    "jun": {
        income: 0,
        expense: 0,
    },
    "jul": {
        income: 0,
        expense: 0,
    },
    "aug": {
        income: 0,
        expense: 0,
    },
    "sep": {
        income: 0,
        expense: 0,
    },
    "oct": {
        income: 0,
        expense: 0,
    },
    "nov": {
        income: 0,
        expense: 0,
    },
    "dec": {
        income: 0,
        expense: 0,
    },
}

const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;
    const container = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        const value = obj[key]
        container[key] = deepClone(value)
    }
    return container;
}

const getMonthlyTotals = (trans, rates, currency) => {
    const validTrans = (trans).filter(tran => isThisYear(parseISO(tran.date)))
    const monthArray = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    const monthlyTotalsClone = deepClone(monthlyTotals)
    validTrans.forEach((tran) => {
        const myDate = new Date(tran.date)
        const targetRate = rates[tran.date][tran.currency]
        const month = monthArray[myDate.getMonth()]
        monthlyTotalsClone[month][tran.type] += convCurrency(tran.amount, currency, tran.rateToUSD, targetRate)

    })
    return monthlyTotalsClone;

}



export default getMonthlyTotals