const formatNumber = (value, symbol) => {
    if (value === 0) return `${symbol}0`
    const absNum = Math.abs(value)
    const tiers = [
        { threshold: 1e12, suffix: "T" },
        { threshold: 1e9, suffix: "B" },
        { threshold: 1e6, suffix: "M" },
        { threshold: 1e3, suffix: "K" },
    ]
    const matchedTier = tiers.find(tier => absNum >= tier.threshold)
    if (matchedTier) {
        const formatted = parseFloat((value / matchedTier.threshold).toFixed(1)) + matchedTier.suffix
        return `${symbol}${formatted}`
    }
    return `${symbol}${value.toLocaleString()}`
}

export default formatNumber;