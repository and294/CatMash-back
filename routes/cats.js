var express = require('express');
const Cat = require('../models/cats');
var router = express.Router();

//Récupérer la liste de tous les chats
router.get('/', (req, res) => {
  Cat.find().then((data) => {
    res.json({ cats: data });
  });
});

//Route pour voter pour un chat
router.get('/updateVote', (req, res) => {
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







module.exports = router;
