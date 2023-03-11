///we want the router funcitonality of express
const router = require('express').Router();
// modular route for /notes
const notesRouter = require('./notes');

//use the bloody router 
router.use('/api/notes',notesRouter); 
//export the goddamn thing
module.exports = router;