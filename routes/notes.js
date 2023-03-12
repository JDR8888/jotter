// will need to use express router
const notes = require('express').Router();
//since we're handling files we need fs functionality, which we should have through the fs utility helper file 
const {readAndAppend, readFromFile} = require('../helpers/fsUtil.js');
const uuid = require('../helpers/uuid');
const db = require('../db/db.json'); 
//assigning path here because just putting the path in line 10 was not working

//route for getting the notes from db
notes.get('/', (req, res) => {
  readFromFile('db', 'utf-8').then((data) => 
    // return res.json(data);
  res.json(JSON.parse(data))
  )
    // console.info(`${req.method}`);
    res.json(db);
});
// this is the route for adding notes to the json db file. 
notes.post('/', (req, res) => {
    // deconstruct --> define what will be added to the json file
    const { title, text } = req.body;
  // if there is conten (a title and text) then will make a new note object with a unique id 
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  // read the new note and append (not write brand new file) to the db file
      readAndAppend(newNote, 'db');
      res.json(`notes added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

module.exports = notes;