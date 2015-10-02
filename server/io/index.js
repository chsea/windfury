var socketio = require('socket.io');
var io = null;
var _ = require('lodash');

module.exports = function (server) {
  if (io) return io;

  io = socketio(server);

  // let availableUsers = [];
  // let pendingUsers = [];
  // let availableGames = [];
  // let pendingGames = [];

  let waitingPlayers = [];
  io.on('connection', socket => {
    console.log('user connected');

    // socket.on('enterCreateRoom', user => {
    //   if (!_.find(availableUsers, { _id: user._id}) && !_.find(pendingUsers, { _id: user._id})) availableUsers.push(user);
    //   io.emit('newUser', availableUsers, availableGames);
    // });
    //
    // socket.on('joinGame', (i, user) => {
    //   if (!availableGames[i]) availableGames.push({player1: user});
    //   else {
    //     availableGames[i].player2 = user;
    //     let newGame = availableGames.splice(i, 1)[0];
    //     pendingGames.push(newGame);
    //   }
    //   _.remove(availableUsers, availableUser => availableUser._id == user._id);
    //   pendingUsers.push(user);
    //   io.emit('gameJoined', availableUsers, availableGames);
    // });

    socket.on('join', (player, deck) => {
      if (_.find(waitingPlayers, {player: {_id: player._id}})) return;

      // let matchingPlayers = waitingPlayers.filter(matchingPlayer => matchingPlayer.player._id === player._id);
      let matchingPlayers = waitingPlayers;
      if (matchingPlayers.length) {
        let player1 = waitingPlayers.splice(matchingPlayers[0].index, 1)[0];
        player1.socket.emit('startGame');
        console.log('hi');
        socket.emit('startGame');
      }
      else {
        waitingPlayers.push({player: player, deck: deck, socket: socket, index: waitingPlayers.length});
        socket.emit('waitForPlayer');
      }
    });
  });

  return io;
};
