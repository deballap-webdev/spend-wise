const handleAmount = (e) => {
  const regex = /[^0-9.]/g;
  let value = e.target.value.replace(regex, "");
  const parts = value.split(".");
  if (parts.length > 2) {
    value = parts[0] + "." + parts.slice(1).join("");
  }
  return Number(value);
};

export default handleAmount;
