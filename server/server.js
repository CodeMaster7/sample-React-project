const express = require('express'),
      bodyParser = require('body-parser');

const app = express(),
      port = 3000;


// ===== TOP LEVEL MIDDLEWARE ===== //
app.use( bodyParser.json());

// ====== ENDPOINTS ====== //
// READ
// CREATE
// UPDATE
// DELETE

app.listen(port, () => { console.log(`Watching you on port ${ port }`) });
