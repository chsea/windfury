var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Minion = Promise.promisifyAll(mongoose.model('minion'));
var Spell = Promise.promisifyAll(mongoose.model('spell'));
var Card = Promise.promisifyAll(mongoose.model('Card'));
var Deck = Promise.promisifyAll(mongoose.model('Deck'));
var Game = Promise.promisifyAll(mongoose.model('Game'));
var cards = require('./test-cards');
var chance = require('chance')(123);
var _ = require('lodash');

var tempData = {};

function seedMinions() {
  var minions = cards.minions;
  return Minion.createAsync(minions);
}

function seedSpells() {
  var spells = cards.spells;
  return Spell.createAsync(spells);
}

function seedUsers() {

  function randPhoto() {
    var n = chance.natural({min: 0, max: 96});
    return 'http://api.randomuser.me/portraits/med/women/' + n + '.jpg';
  }

  var users = [
    {
      username: "sea",
      email: "sea@hi.com",
      password: "bye",
      photo: randPhoto(),
      cards: _.pluck(tempData.cards, '_id'),
      decks: [],
      stardust: 132
    },
    {
      username: "sky",
      email: "sky@hi.com",
      password: "bye",
      photo: randPhoto(),
      cards: _.pluck(tempData.cards, '_id'),
      decks: [],
      stardust: 102
    }
  ];

  return User.createAsync(users);
}

function seedGames() {
  var game = {
    name: "Startup",
    admins: tempData.users[0]._id,
    cards: _.pluck(tempData.cards, '_id')
  };

  return Game.createAsync(game);
}

function seedDecks() {
  var deck = {
    name: "Bang Hearthstone",
    game: tempData.games._id,
    type: {
      name: 'Snapchat',
      logic: {
        heal: {
          target: {
            canSelect: true,
            minion: true,
            player: true
          }
        }
      }
    },
    cards: _.pluck(tempData.cards, '_id')
  };

  return Deck.createAsync(deck);
}

connectToDb.then(function() {
  var remove = [
    User.remove(),
    Deck.remove(),
    Card.remove(),
    Game.remove()
  ];

  Promise.all(remove).then(function() {
    return Promise.all([seedMinions(), seedSpells()]);
  }).then(function(cards) {
    tempData.cards = cards[0].concat(cards[1]);
    return seedUsers();
  }).then(function(users) {
    tempData.users = users;
    return seedGames();
  }).then(function(games) {
    tempData.games = games;
    return seedDecks();
  }).then(function(decks) {
    tempData.decks = decks;
    return User.updateAsync({}, {games: [tempData.games], decks: [tempData.decks]}, {multi: true});
  }).then(function(users) {
    console.log(chalk.green('Seed successful!'));
    process.kill(0);
  }).catch(function(err) {
    console.error(err);
    process.kill(1);
  });
});
