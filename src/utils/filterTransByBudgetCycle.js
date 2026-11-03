import { isThisMonth, parseISO } from "date-fns"

const filterTransByBudgetCircle = (startDate, transactions) => {
    if (!startDate) return transactions.filter(tran => isThisMonth(tran.date))
}

const filterByMonth = (transactions) => transactions.filter(tran => isThisMonth(tran))
const filterByStartDate = (startDate, transactions) => {
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
    const cycleStart = new Date(startYr, startMonth, startDay)
    const cycleEnd = new Date(endYr, endMonth, endDay)

    transactions.filter(trans => parseISO(trans.date) >= cycleStart && parseISO(trans.date) < cycleEnd)
}

const getSafeDay = (yr, monthIndex, day) => {
    const lastDay = new Date(yr, monthIndex + 1, 0)
    return lastDay >= day ? day : lastDay;
}