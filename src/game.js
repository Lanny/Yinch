;(function() {
  var wrap = function(View, Board, utils) {

    var modes = {};
    modes[utils.RING_PLACEMENT] = {
      onBoardClick: function(diag, vert) {
        var val = this.board.getCell(diag, vert);

        console.log('bla');
        if (val === utils.EMPTY) {
          console.log('blue');
          console.log(this.curPlayer() | utils.RING);
          this.board.setCell(diag, vert, this.curPlayer() | utils.RING);

          if (this.curPlayer() === utils.BLACK) {
            this.blackRingsPlaced++;
          } else {
            this.whiteRingsPlaced++;
          }

          if (this.blackRingsPlaced === 5 && this.whiteRingsPlaced === 5) {
            console.log('DONE!');
            this.state = utils.WHITE | utils.RING_PICK;
          } else {
            // Still ringpick, flip player
            this.state = utils.flipMask(this.state, utils.PLAYER_MASK);
          }

          this.view.onStateChange();
        }
      }
    };

    modes[utils.RING_PICK] = {
      onBoardClick: function(diag, vert) {
      }
    };

    modes[utils.RING_MOVE] = {
      onBoardClick: function(diag, vert) {
      }
    };

    var Game = function(canvas) {
      this.board = new Board();
      this.view = new View(canvas, this.board, this);

      this.blackRingsPlaced = 0;
      this.whiteRingsPlaced = 0;

      this.state = utils.BLACK | utils.RING_PLACEMENT;
    };

    Game.prototype = {
      start: function() {
        this.view.startRenderLoop();
      },
      curPlayer: function() {
        return this.state & utils.PLAYER_MASK;
      },
      delegate: function(method, args) {
        return modes[utils.MODE_MASK & this.state][method].apply(this, args);
      },
      onBoardClick: function(diag, vert) {
        return this.delegate('onBoardClick', [diag, vert]);
      }
    };

    return Game;
  };

  define(['flat-view', 'board', 'utils'], wrap);
})();

