

const SummaryCard = ({ amount, icon, color, text, percentChange }) => {
    /*  const formattedAmount = amount.split("")
     for (let i = 0; i <= amount.length - 1; i++) {
         if (i % 3 === 0) {
             amount.slice(i) + ","
         }
 
     }
     console.log(formattedAmount) */

    return (
        <div className="bg-CARD-BG border border-BORDER grow h-40 p-2 flex flex-col justify-evenly rounded-md">
            <div className="flex flex-row justify-between items-center"> <p className="text-[0.7rem]">{text}</p>
                {icon}</div>
            <p className="font-bold text-[1.2rem]">{amount}</p>
            <p className="text-[0.7rem]">{percentChange} vs last month</p>
        </div>
    )
}

export default SummaryCard