;(function() {
  var wrap = function() {
    var utils = {};

    utils.lengths = [3, 6, 7, 8, 9, 8, 9, 8, 7, 6, 3];
    utils.offsets = [1, 0, 0, 0, 0, 1, 1, 2, 3, 4, 6];

    utils.BLACK = 0;
    utils.WHITE = 1;

    utils.RING = 2;
    utils.TILE = 0;

    utils.EMPTY = 3;

    utils.RING_PLACEMENT = 1 << 1;
    utils.RING_PICK = 2 << 1;
    utils.RING_MOVE = 3 << 1;

    utils.PLAYER_MASK = 1;
    utils.TYPE_MASK = 2;
    utils.MODE_MASK = ~1;

    utils.WHITE_TILE = utils.TILE | utils.WHITE;
    utils.BLACK_TILE = utils.TILE | utils.BLACK;
    utils.WHITE_RING = utils.RING | utils.WHITE;
    utils.BLACK_RING = utils.RING | utils.BLACK;

    utils.EMPTY = ~1;

    utils.flipMask = function(val, mask) {
      return (val & ~mask) | (~val & mask);
    };

    utils.fillArr = function(value, n) {
      var arr = [];
      for (var i=0; i<n; i++) {
        arr.push(value);
      }

      return arr;
    };

    utils.validatePoint = function(diag, vert) {
      if (diag < 0 || diag > 10) {
        throw new Error('Invalid diag coord: ' + diag + ', ' + vert);
      }

      var modVert = vert - utils.offsets[diag];

      if (modVert < 0 || modVert >= utils.lengths[diag]) { 
        throw new Error('Invalid vert coord: ' + diag + ', ' + vert);
      }

      return modVert;
    };

    return utils;
  };

  define([], wrap);
})();

