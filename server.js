const server = require('./app.js');

const port = process.env.PORT;

server.listen(port, function(){
  console.log(`server listening right now on port ${port}`);
})
