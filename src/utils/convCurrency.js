const convCurrency = (amount, toCurrency, rateToUSD, targetCurrencyRate) => {
  const amountInUSD = amount / rateToUSD;
  if (toCurrency === "USD") return amountInUSD.toFixed(2)
  return parseFloat((amountInUSD * targetCurrencyRate).toFixed(2));
};

export default convCurrency;
