import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import getMonthlyTotals from "../utils/getMonthlyTotals"
import { useStoreState } from "easy-peasy"
import formatNumber from "../utils/formatNumber"
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)




const BarChart = () => {
    const transactions = useStoreState(state => state.history.transactions)
    const rates = useStoreState(state => state.ratesCache.cache)
    const currency = useStoreState(state => state.settings.currency)
    const monthlyTotals = getMonthlyTotals(transactions, rates, currency)
    const incomeData = Object.values(monthlyTotals).map(month => month.income)
    const expenseData = Object.values(monthlyTotals).map(month => month.expense)
    const symbol = useStoreState(state => state.symbol)
    const data = {
        labels: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Income',
                borderRadius: 3,
                data: incomeData,
                backgroundColor: '#029565',
                categoryPercentage: 0.8,
                barPercentage: 0.6,
            },
            {
                label: 'Expenses',
                data: expenseData,
                backgroundColor: "#e2e7eb",
                borderRadius: 3,
                categoryPercentage: 0.8,
                barPercentage: 0.6
            }
        ]
    }

    const options = {
        responsive: true,

        interaction: {
            mode: 'index',
            intersect: false,
        },

        plugins: {
            legend: {
                position: 'top',
                align: "end",
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    boxWidth: 9,
                    boxHeight: 6,
                    padding: 1,
                    font: {
                        size: 13,
                    }
                }

            },
            title: {
                display: true,
                text: 'Income vs Expenses',
                position: "top",
                align: "",
                font: {
                    size: 16
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChatArea: true,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return formatNumber(value, symbol)
                    }
                }
            }
        },
    }

    const customPlugins = [{
        id: 'monthHoverBackground',
        beforeDatasetsDraw(chart) {
            const { ctx, chartArea: { top, bottom } } = chart;

            if (chart.active && chart.active.length > 0) {
                const activeIndex = chart.active[0].index;
                const meta = chart.getDatasetMeta(0)
                const dataPoint = meta.data[activeIndex];
                if (dataPoint) {
                    const columnWidth = (chart.chartArea.right - chart.chartArea.left)
                    ctx.save()
                    ctx.fillStyle = "#eff2f5"
                    ctx.fillRect(dataPoint.x - (columnWidth / 2),
                        top,
                        columnWidth,
                        bottom - top);
                    ctx.restore();

                }
            }
        }
    }]
    return (
        <div className="bg-white p-4 rounded-md">
            <Bar data={data} options={options} plugins={customPlugins}></Bar>
        </div>
    )
}

export default BarChart