const properCase = (entryText) => {
    const text = cleanText(entryText)
    const textArray = text.split(" ")
    return textArray.map(text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).join(" ")
}

const cleanText = (text) => {
    const regex = / {2,}/g
    return text.replaceAll(regex, " ")
}

export default properCase