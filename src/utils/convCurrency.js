const convCurrency = (amount, toCurrency, rateToUSD, targetCurrencyRate) => {
  const amountInUSD = amount / rateToUSD;
  if (toCurrency === "USD") return amountInUSD
  return amountInUSD * targetCurrencyRate;
};

export default convCurrency;
