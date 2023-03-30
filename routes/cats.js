var express = require('express');
const Cat = require('../models/cats');
const Vote = require('../models/vote');
var router = express.Router();

//Récupérer la liste de tous les chats
router.get('/', (req, res) => {
  Cat.find().then((data) => {
    res.json({ cats: data });
  });
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

    Vote.findOneAndUpdate(
      {_id: '64243ffe6555fa488a4b89b0'},
      { $inc: { vote: 1 } },
      { new: true }
    )
      .then(data => {
        res.json({ vote: data });
        console.log(data)
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
});







module.exports = router;
