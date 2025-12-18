const express = require("express")
const app = express()

const quotes = [
    "Automation is the future of DevOps 🚀",
    "You build it, you run it",
    "Docker makes it work everywhere",
    "CI/CD is the backbone of DevOps",
    "DevOps is culture, not a tool"
]

app.use(express.static("public"))

app.get("/api/quote", (req, res) => {
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    res.json({ quote: random })
})

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})