const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const pause = require('connect-pause')

// Delay a bit
server.use(pause(350));

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (['POST', 'PATCH', 'PUT'].includes(req.method)
      && req.url.match(/pets/)
    ) {
    // Validate the pet name and kind
		let errors = null;

    if(!req.body.name) {
      errors = errors || {};
      errors.name = "Name can't be blank";
    }
    if(req.body.kind !== 'cat' && req.body.kind !== 'dog') {
      errors = errors || {};
      errors.kind = "Kind must be 'cat' or 'dog'";
    }

    if(errors) {
      return res.status(400).json(errors);
    }
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3001, () => {
  console.log('Pet Store server is running')
})
