const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const PORT = 3500;

app.use(express.static('public', {index:'home.html'}))
app.use(bodyParser.json());
app.use('/', routes);


app.listen(process.env.PORT || PORT, function() {
  console.log("Movie App Running on port " + PORT + "!  Press ^C to quit" );
});
