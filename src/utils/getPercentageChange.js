const getPercentageChange = (monthlyTotals, type) => {
    const percentChangeObj = {
        total: getTotalPercentChange(monthlyTotals),
        income: getIncomePercentChange(monthlyTotals),
        expense: getExpensePercentChange(monthlyTotals),
    }
    return percentChangeObj[type]
}

const getTotalPercentChange = (monthlyTotals) => {
    const monthData = getThisAndPrevMonthData(monthlyTotals)
    const thisMonthBal = monthData.thisMonth.income - monthData.thisMonth.expense
    const prevMonthBal = monthData.prevMonth.income = monthData.prevMonth.expense
    const percentChange = parseFloat((((thisMonthBal - prevMonthBal) / prevMonthBal) * 100).toFixed(2))
    return percentChange
}

const getIncomePercentChange = (monthlyTotals) => {
    const monthData = getThisAndPrevMonthData(monthlyTotals)
    const thisMonthIncome = monthData.thisMonth.income
    const prevMonthIncome = monthData.thisMonth.income
    const percentChange = parseFloat((((thisMonthIncome - prevMonthIncome) / prevMonthIncome) * 100).toFixed(2))
    return percentChange
}

const getExpensePercentChange = (monthlyTotals) => {
    const monthData = getThisAndPrevMonthData(monthlyTotals)
    const thisMonthExpense = monthData.thisMonth.expense
    const prevMonthExpense = monthData.prevMonth.expense
    const percentChange = parseFloat((((thisMonthExpense - prevMonthExpense) / prevMonthExpense) * 100).toFixed(2))
    return percentChange
}

const getThisAndPrevMonthData = (monthlyTotals) => {
    const monthIndex = new Date().getMonth()
    const thisMonth = monthlyTotals[Object.keys(monthlyTotals)[monthIndex]]
    const prevMonth = monthlyTotals[Object.keys(monthlyTotals)[monthIndex - 1]]
    return {
        thisMonth,
        prevMonth
    }
}

export default getPercentageChange