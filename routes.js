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

router.get('/movies/:title', (req, res) => {
    const title = req.params.title
    const movies = db.get('movies')
        .find({
            title: title
        })
        .value()
    res.send(movies);
});

router.post('/movies', (req, res) => {
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

router.put('/movies/:title', (req, res) => {
    const title = req.params.title;
    db.get('movies')
        .find({
            title: title
        })
        .assign(req.body)
        .write()
        .then(updateMovie => {
            res.send(updateMovie)

        })
        .catch(err => {
            console.log(err);
        })
})

router.delete('/movies/:title', (req, res) => {
    const thisOne = req.params.title;
    db.get('movies')
        .remove({
            title: thisOne
        })
        .write()
        .then(deleteMovie => {
            console.log("here", deleteMovie);
            res.status(204).send("DID IT")
        })
        .catch(err => {
            console.log(err);
        })
})




module.exports = router;
