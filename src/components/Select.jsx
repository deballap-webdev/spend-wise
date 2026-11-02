const Select = ({ id, disabled, options, allOptionsLabel, value, setValue }) => {
  return (
    <select
      disabled={disabled}
      name={id}
      id={id}
      className="bg-CARD-BG border-BORDER max-w-full min-w-fit rounded-md border px-2 py-2 text-[0.7rem] font-medium"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {allOptionsLabel && <option>{allOptionsLabel}</option>}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
