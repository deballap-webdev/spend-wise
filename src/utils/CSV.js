const exportToCSV = (transactions, symbol) => {
    const headers = ["Desription", "Category", "Type", "Date", `Amount (${symbol})`]
    const rows = transactions.map(t => [`"${t.description}"`, t.category, t.type, t.date, t.amount])
    const csvContent = [headers.join(","), ...rows.map(row => row.join(","))].join("\n")
    const blob = new Blob([csvContent], { type: "text/csv;charst=utf-8;" });
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `spendwise-transactions-${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}

export default exportToCSV