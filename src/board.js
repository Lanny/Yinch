;(function() {
  var wrap = function(utils) {
    var Board = function() {
      this.cells = [
        utils.fillArr(utils.EMPTY, 3),
        utils.fillArr(utils.EMPTY, 6),
        utils.fillArr(utils.EMPTY, 7),
        utils.fillArr(utils.EMPTY, 8),
        utils.fillArr(utils.EMPTY, 9),
        utils.fillArr(utils.EMPTY, 8),
        utils.fillArr(utils.EMPTY, 9),
        utils.fillArr(utils.EMPTY, 8),
        utils.fillArr(utils.EMPTY, 7),
        utils.fillArr(utils.EMPTY, 6),
        utils.fillArr(utils.EMPTY, 3),
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
      },
      getCell: function(diag, vert) {
        var modVert = utils.validatePoint(diag, vert);
        return this.cells[diag][modVert];
      }
    };

    return Board;
  };

  define(['utils'], wrap);
})();
