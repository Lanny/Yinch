;(function() {
  var wrap = function(utils) {
    var Board = function() {
      this.cells = [
        [0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0]
      ];
    };

    Board.prototype = {
      iter: function(cb) {
        for (var diag=0; diag<11; diag++) {
          for (var i=0; i<this.cells[diag].length; i++) {
            var vert = i + utils.offsets[diag];
            utils.validatePoint(diag, vert);

            cb(this.cells[diag][i], diag, vert);
          }
        }
      },
      setCell: function(diag, vert, value) {
        var modVert = utils.validatePoint(diag, vert);
        this.cells[diag][modVert] = value;
      }
    };

    return Board;
  };

  define(['utils'], wrap);
})();
