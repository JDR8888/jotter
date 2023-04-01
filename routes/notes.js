// will need to use express router
const notes = require('express').Router();
const fs = require('fs');
//since we're handling files we need fs functionality, which we should have through the fs utility helper file 
const {readAndAppend, readFromFile, writeToFile} = require('../helpers/fsUtil.js');
const uuid = require('../helpers/uuid');
const db = require('../db/db.json'); 
//assigning path here because just putting the path in line 10 was not working

//route for getting the notes from db
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => 
    // return res.json(data) });
  res.json(JSON.parse(data)));
});

// this is the route for adding notes to the json db file. 
notes.post('/', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };

    readAndAppend(newNote, './db/db.json');

    res.json(`notes added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

module.exports = notes;