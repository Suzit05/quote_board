async function getQuote() {
    const res = await fetch("/api/quote")
    const data = await res.json()
    document.getElementById("quote").innerText = data.quote
}
