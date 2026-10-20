const Select = ({ id, options, allOptionsLabel, value, setValue }) => {
    return (
        <select name={id} id={id} className="bg-CARD-BG px-2 py-2 w-full rounded-md border border-BORDER font-medium text-[0.7rem] min-w-fit" value={value} onChange={(e) => setValue(e.target.value)}>
            {allOptionsLabel && <option>{allOptionsLabel}</option>}
            {options.map(option => <option key={option.value} value={option.value} selected={option.default}>
                {option.label}
            </option>)}
        </select>
    )
}

export default Select