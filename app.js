const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const PORT = 3500;
app.use(express.static('public'))
app.use(bodyParser.json());
app.use('/', routes);


app.listen(PORT, function() {
  console.log("Listening on port " + PORT + "!  Press ^C to quit" );
});
