const path = require('path')
const express = require('express')
const { dirname } = require('path');

const app = express()
const PORT = 3001;

app.use(express.static('public'))
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/landing.html'))
);
app.get('/note-pad', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/note-pad.html'))
);
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);