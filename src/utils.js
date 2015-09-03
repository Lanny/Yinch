;(function() {
  var wrap = function() {
    var utils = {};

    utils.lengths = [3, 6, 7, 8, 9, 8, 9, 8, 7, 6, 3];
    utils.offsets = [1, 0, 0, 0, 0, 1, 1, 2, 3, 4, 6];


    utils.EMPTY = 0;

    utils.TILE = 1;
    utils.RING = 2;
    utils.WHITE = 4;
    utils.BLACK = 8;

    utils.WHITE_TILE = utils.TILE | utils.WHITE;
    utils.BLACK_TILE = utils.TILE | utils.BLACK;
    utils.WHITE_RING = utils.RING | utils.WHITE;
    utils.BLACK_RING = utils.RING | utils.BLACK;

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

