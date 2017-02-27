const express = require('express');
const router = express.Router();
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');
const db = low('database/movies.json', {
  storage: fileAsync
});

router.get('/movies', (req, res) => {
  const movies = db.get('movies');
  res.send(movies);
});

router.post('/movies', (req, res)=> {
  db.get('movies')
  .push(req.body)
  .write()
  .then(newMovie => {
    res.status(201).send(newMovie)
  })
  .catch(err => {
    console.log(err);
  })
})


// router.get('/movies/:title', (req, res) => {
//   const movieTitle = req.params.title;
//   db.get('movies')
//     .find({title: movieTitle})
// })


module.exports = router;
