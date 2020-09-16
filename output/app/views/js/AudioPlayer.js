"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer(domElement) {
    var _this = this;

    _classCallCheck(this, AudioPlayer);

    this.domElement = domElement;
    this.canciones = ["./assets/songs/songOne.mp3", "./assets/songs/songTwo.mp3", "./assets/songs/songThree.mp3", "./assets/songs/songFourth.mp3"];
    this.src = this.canciones;
    this.contador = 0; // this.audio = new Audio(this.src);

    this.audio = new Audio(this.src[0]);
    this.controls = {
      domElement: this.domElement.querySelector(".controls")
    };
    console.log(this.src);
    this.progress = this.domElement.querySelector(".video .progress");
    this.initControls(); // this.initProgressActions();

    this.audio.ontimeupdate = function () {
      _this.updateUI();
    };
  }

  _createClass(AudioPlayer, [{
    key: "initControls",
    value: function initControls() {
      this.controls.play = this.controls.domElement.querySelector(".circulos .play");
      this.controls.pause = this.controls.domElement.querySelector(".circulos .pause");
      this.controls.skip = this.controls.domElement.querySelector(".flechas .derecha");
      this.controls.leftSkip = this.controls.domElement.querySelector(".flechas .izquierda");

      if (this.controls.play) {
        this.initPlay(this.controls.play);
      }

      if (this.controls.pause) {
        this.initPlay(this.controls.pause);
      }

      if (this.controls.skip) {
        this.initPlay(this.controls.skip);
      }

      if (this.controls.leftSkip) {
        this.initPlay(this.controls.leftSkip);
      }
    }
  }, {
    key: "initPlay",
    value: function initPlay(domElement) {
      var _this2 = this;

      console.log("entro");

      domElement.onclick = function () {
        var icon = domElement.querySelector("i");
        console.log(icon);
        var isPlay = icon.classList.contains("play");
        var isPause = icon.classList.contains("pause");
        var isSkip = icon.classList.contains("derecha");
        var isLeftSkip = icon.classList.contains("izquierda");

        if (isPlay) {
          _this2.play();
        }

        if (isPause) {
          _this2.pause();
        }

        if (isSkip) {
          _this2.skip();

          ++_this2.contador;
          console.log(_this2.contador);

          _this2.skip(_this2.contador);
        }

        if (isLeftSkip) {
          _this2.skip();

          --_this2.contador;
          console.log(_this2.contador);

          _this2.skip(_this2.contador);
        }
      };
    } // initProgressActions(){
    //     const cover = this.domElement.querySelector(".video")
    //     cover.onclick = (e) => {
    //         const x = e.offsetX;
    //         const totalX = cover.clientWidth;
    //         const progress = x/totalX;
    //         this.setCurrentTime(progress)
    //     };
    // }

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(progress) {
      this.audio.currentTime = this.audio.duration * progress;
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      var total = this.audio.duration;
      var current = this.audio.currentTime;
      var progress = current / total * 100;
      this.progress.style.width = "".concat(progress, "%");
    }
  }, {
    key: "play",
    value: function play() {
      this.audio.play().then()["catch"](function (err) {
        return console.log("Error al reproducir el archivo: ".concat(err));
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      this.audio.pause();
    }
  }, {
    key: "skip",
    value: function skip(contador) {
      if (contador == 0) {
        if (!contador) {
          this.pause();
        }

        var x = document.getElementsByClassName("video")[0];
        x.style.backgroundImage = "";
        this.play(this.audio = new Audio(this.src[0]));
      } else if (contador == 1) {
        if (contador) {
          this.pause();
        }

        var _x = document.getElementsByClassName("video")[0];
        _x.style.backgroundImage = "url(./assets/covers/gif4.gif)";
        this.play(this.audio = new Audio(this.src[1]));
      } else if (contador == 2) {
        if (contador) {
          this.pause();
        }

        var _x2 = document.getElementsByClassName("video")[0];
        _x2.style.backgroundImage = "url(./assets/covers/gif2.gif)";
        this.play(this.audio = new Audio(this.src[2]));
      } else if (contador == 3) {
        if (contador) {
          this.pause();
        }

        var _x3 = document.getElementsByClassName("video")[0];
        _x3.style.backgroundImage = "url(./assets/covers/gif3.gif)";
        this.play(this.audio = new Audio(this.src[3]));
      } else if (contador > 3) {
        alert("no hay más canciones en la cola");
      }
    }
  }]);

  return AudioPlayer;
}();

exports.AudioPlayer = AudioPlayer;