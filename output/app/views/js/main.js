"use strict";

var _AudioPlayer = require("./AudioPlayer");

var playersEl = document.querySelectorAll(".player");
var players = [];
playersEl.forEach(function (player) {
  players.push(new _AudioPlayer.AudioPlayer(player));
});