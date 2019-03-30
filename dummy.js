var http = require('http')

// create a server object:
http
  .createServer(function (req, res) {
    res.write('Hello World bab!') // write a response to the client

    res.end() // end the response
  })
  
  .listen(8080) // the server object listens on port 8080
  console.log('server running on port 8080')

