;(function() {
  var wrap = function(View, Board, utils) {

    var modes = {};
    modes[utils.RING_PLACEMENT] = {
      onBoardClick: function(diag, vert) {
        var val = this.board.getCell(diag, vert);

        if (val === utils.EMPTY) {
          this.board.setCell(diag, vert, this.curPlayer() | utils.RING);

          if (this.curPlayer() === utils.BLACK) {
            this.blackRingsPlaced++;
          } else {
            this.whiteRingsPlaced++;
          }

          if (this.blackRingsPlaced === 5 && this.whiteRingsPlaced === 5) {
            this.state = utils.WHITE | utils.RING_PICK;
          } else {
            // Still ring placement, flip player
            this.state = utils.flipMask(this.state, utils.PLAYER_MASK);
          }

          this.view.onStateChange();
        } else {
          utils.notifyPlayer('Can not place a ring there.',
                             this.curPlayer());
        }
      }
    };

    modes[utils.RING_PICK] = {
      onBoardClick: function(diag, vert) {
        var val = this.board.getCell(diag, vert);
        var playerBit = this.curPlayer();

        if (val !== (playerBit | utils.RING)) {
          utils.notifyPlayer('You must select a ring of your own color.',
                             playerBit);

          return;
        } else {
          this.state = playerBit | utils.RING_MOVE;
          this.anchorDiag = diag;
          this.anchorVert = vert;

          this.board.setCell(diag, vert, playerBit | utils.TILE);

          this.view.onStateChange();
        }
      }
    };

    modes[utils.RING_MOVE] = {
      onBoardClick: function(diag, vert) {
        var diagDelta = diag - this.anchorDiag;
        var vertDelta = vert - this.anchorVert;

        console.log('diag:', diagDelta);
        console.log('vert:', vertDelta);

        if (diagDelta !== 0 &&
            vertDelta !== 0) {
          // Maybe vertical
          if (Math.abs(diagDelta) !== Math.abs(vertDelta)) {
            utils.notifyPlayer('You must move in a straight line.',
                               this.curPlayer());
            return;
          }

          if (Math.sign(diagDelta) !== Math.sign(vertDelta)) {
            utils.notifyPlayer('You must move in a straight line.',
                               this.curPlayer());
            return;
          }

        }

        var destVal = this.board.getCell(diag, vert);

        if (destVal !== utils.EMPTY) {
          utils.notifyPlayer('You can not jump to an occupied position.',
                             this.curPlayer());
          return;
        }

        var rDiag = this.anchorDiag;
        var rVert = this.anchorVert;

        var haveHopped = false;
        var flippedTiles = [];

        while (rDiag !== diag || rVert !== vert) {
          rDiag += Math.sign(diagDelta);
          rVert += Math.sign(vertDelta);

          console.log(diag, vert);
          console.log(this.anchorDiag, this.anchorVert);
          console.log(rDiag, rVert);

          var val = this.board.getCell(rDiag, rVert);

          console.log(val);

          if ((val & utils.TYPE_MASK) === utils.RING &&
              val !== utils.EMPTY) {
            utils.notifyPlayer('Your path is blocked by a ring',
                               this.curPlayer());
            return;
          }

          if (haveHopped === true &&
              val === utils.EMPTY &&
              rDiag !== diag &&
              rVert !== vert) {
            utils.notifyPlayer('You must stop immidately following the ' +
                               'last hopped tile.', this.curPlayer());
            return;
          } 

          if ((val & utils.TYPE_MASK) === utils.TILE) {
            flippedTiles.push([rDiag, rVert]);
          }
        }

        for (var i=0; i<flippedTiles.length; i++) {
          var tDiag = flippedTiles[i][0];
          var tVert = flippedTiles[i][1];
          var flipVal = this.board.getCell(tDiag, tVert);

          this.board.setCell(tDiag, tVert, flipVal ^ utils.PLAYER_MASK);
        }
        
        this.board.setCell(diag, vert, this.curPlayer() | utils.RING);
        this.state = (this.curPlayer() ^ utils.PLAYER_MASK) | utils.RING_PICK;
        this.view.onStateChange();
      }
    };

    var Game = function(canvas) {
      this.board = new Board();
      this.view = new View(canvas, this.board, this);

      this.blackRingsPlaced = 0;
      this.whiteRingsPlaced = 0;

      this.state = utils.BLACK | utils.RING_PLACEMENT;

      // During ring movement phase, hold the original location so we can
      // validate potential moves.
      this.anchorDiag = null;
      this.anchorVert = null;
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

