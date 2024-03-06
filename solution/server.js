import Express from "express"
const server = Express()

const bodyParser = Express.urlencoded({ extended: true })

server.get("/", (req, res) => {
  res.send(
    /*html*/
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>Express Demo</title>
    </head>
    <body>
      <form method='POST'>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </body>
  </html>`
  )
})

// create a post route - it will fail
server.post("/", bodyParser, (req, res) => {
  // add the bodyParser to illustrate the concept of middleware
  res.redirect("/name")

  const userName = req.body.name // iterate to this, replacing the redirect

  res.send(
    /*html*/
    `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Express Demo</title>
  </head>
  <body>
  <h1>Welcome ${userName}</h1>
  </form>
  </body>
  </html>`
  )
})

// create a get '/name' that says 'welcome'
server.get("/name", bodyParser, (req, res) => {
  res.send(
    /*html*/
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Express Demo</title>
  </head>
  <body>
    <h1>Welcome</h1>
    </form>
  </body>
  </html>`
  )
})

export default server
