const express = require("express")
const app = express()
const port = 80

app.use(express.static("react-crypto-app/dist"))

app.listen(port, () => console.log("Server has been started on port 80"))