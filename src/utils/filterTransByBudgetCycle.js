import { isThisMonth, parseISO } from "date-fns"

const filterTransByBudgetCycle = (transactions, startDate) => {
    if (!startDate) return transactions.filter(tran => isThisMonth(tran.date))
    const { cycleEnd, cycleStart } = getCycleDates(startDate)
    return transactions.filter(trans => parseISO(trans.date) >= cycleStart && parseISO(trans.date) < cycleEnd)
}

export function getCycleDates(startDate) {
    if (!startDate) {
        const monthIndex = new Date().getMonth()
        const yr = new Date().getFullYear()
        const lastDay = new Date(yr, monthIndex - 1, 0).getDate()

        return {
            cycleEnd: new Date(yr, monthIndex, lastDay),
            cycleStart: new Date(yr, monthIndex, 1)
        }
    }
    const day = parseISO(startDate).getDate()
    const todayStr = new Date().toISOString().split('T')[0]
    const year = parseISO(todayStr).getFullYear()
    const month = parseISO(todayStr).getMonth()
    let startYr = year;
    let startMonth = month;
    if (parseISO(todayStr).getDate() < day) startMonth -= 1;
    if (startMonth < 0) {
        startMonth = 11;
        startYr -= 1
    }
    let endYr = startYr
    let endMonth = startMonth + 1
    if (endMonth > 11) {
        endMonth = 0
        endYr += 1
    }
    let startDay = getSafeDay(startYr, startMonth, day)
    let endDay = getSafeDay(endYr, endMonth, day)

    return {
        cycleStart: new Date(startYr, startMonth, startDay),
        cycleEnd: new Date(endYr, endMonth, endDay)
    }
}

const getSafeDay = (yr, monthIndex, day) => {
    const lastDay = new Date(yr, monthIndex + 1, 0).getDate()
    return lastDay >= day ? day : lastDay;
}

export default filterTransByBudgetCycle