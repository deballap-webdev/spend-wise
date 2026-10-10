

const SummaryCard = ({ currency, amount, icon, color, text, percentChange }) => {
    return (
        <div className="bg-CARD-BG border border-BORDER w-40 h-40">
            <p>{text}</p>
        </div>
    )
}

export default SummaryCard