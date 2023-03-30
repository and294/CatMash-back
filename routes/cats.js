var express = require('express');
const Cat = require('../models/cats');
const Vote = require('../models/vote');
var router = express.Router();

//Récupérer la liste de tous les chats
router.get('/', (req, res) => {
  Cat.find().then((data) => {
    res.json({ cats: data });
  });
});

//Récupérer le nombre total de votes
router.get('/votes', (req, res) => {
  Vote.find().then((data) => {
    res.json({ votes: data });
  });
});


//Route pour voter pour un chat
router.post('/updateVote', (req, res) => {
  Cat.findOneAndUpdate(
    { id: req.body.id },
    { $inc: { vote: 1 } },
    { new: true }
  )
    .then(data => {
      res.json({ cats: data });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

//Route pour incrémenter le nombre total de vote
router.post('/updateTotalVoteCount', (req, res) => {
  Vote.findOneAndUpdate(
  {_id: '64243ffe6555fa488a4b89b0'},
  { $inc: { vote: 1 } },
  { new: true }
)
  .then(data => {
    res.json({ votes: data });
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});








module.exports = router;
