const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router({ flags: [] })
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/flags', router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('CTF API running')
})
