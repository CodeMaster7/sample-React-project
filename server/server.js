const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors');

const app = express(),
      port = 3000;


// ===== TOP LEVEL MIDDLEWARE ===== //
app.use( bodyParser.json() );
app.use(cors() );

// ====== ENDPOINTS ====== //
// READ
app.get('/', (req, res) => res.send('Hello World!'))
// CREATE
// UPDATE
// DELETE

app.listen(port, () => { console.log(`Watching you on port ${ port }`) });
