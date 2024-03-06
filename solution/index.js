import server from "./server.js"

const port = "3000"

server.listen(port, () =>
  console.log("\u001b[35m", `Listening at http://localhost:3000`)
)
