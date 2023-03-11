const express = require('express');
const path = require('path');
// const fs = require('fs');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api); //be able to get api routes

//need to be able to serve static pages
app.use(express.static('public'));

//api routes 
//route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);







// listener 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
