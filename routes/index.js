///we want the router funcitonality of express
// const router = require('express').Router();
const router = require('express');
// modular route for /notes
const notesRouter = require('./notes');
const app = router();
//use the bloody router 
// router.use(notesRouter); 
app.use('/notes', notesRouter)
//export the goddamn thing
module.exports = app;