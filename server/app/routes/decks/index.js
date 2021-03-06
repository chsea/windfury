'use strict'
var router = require('express').Router();
var _ = require('lodash');
var mongoose = require('mongoose');
var Deck = mongoose.model('Deck');
var deepPopulate = require('mongoose-deep-populate');

router.param('id', (req, res, next, id) => {
  Deck.findById(id).deepPopulate('cards')
  .then(function(deck) {
      req.deck = deck;
      next();
  })
  .then(null, next);
});

router.get('/', (req, res, next) => {
  Deck.find(req.query).deepPopulate('cards').exec()
  .then(decks => res.json(decks))
  .then(null, next);
});

router.post('/', (req, res, next) => {
  Deck.create(req.body)
  .then(deck => {
    res.json(deck);
  }).then(null, next);
});

router.get('/:id', (req, res, next) => res.send(req.deck));

router.put('/:id', function(req, res, next) {
  Object.keys(req.body).forEach(function(key) {
    req.deck[key] = req.body[key];
  });
  return req.deck.save()
    .then(function(updatedDeck) {
      res.status(200).json(updatedDeck);
    })
    .then(null, next);
});

router.put('/name/:id', function(req, res, next) {
  console.log("req.body", req.body);
  req.deck.name = req.body;
  console.log("new deck ", req.deck);
  req.deck.save()
    .then(function(updatedDeck) {
      res.json(updatedDeck);
    })
    .then(null, next);
});

router.put('/removecard/:id', function(req, res, next) {
  var indx = req.deck.cards.indexOf(req.body._id);
  req.deck.cards.splice(indx, 1);
  req.deck.save()
    .then(function(updatedDeck) {
      res.json(updatedDeck);
    })
    .then(null, next);
});


router.delete('/:id', (req, res, next) => {
  req.deck.remove().then(deck => {
    res.json(deck);
  }).then(null, next);
});

module.exports = router;
