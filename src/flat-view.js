;(function() {
  var wrap = function(utils) {
    var rad = function(theta) {
      return theta * (Math.PI*2)/360;
    };

    var FlatView = function(canvas, board) {
      this.board = board;
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.unitSize = Math.min(this.canvas.height, this.canvas.width) / 9;

      this.tileSize = this.unitSize * 0.33;

      this.cos = Math.cos(rad(30));
      this.sin = Math.sin(rad(30));
      
      this.axisLengths = [
        3 * this.unitSize,
        6 * this.unitSize,
        7 * this.unitSize,
        8 * this.unitSize,
        9 * this.unitSize,
        8 * this.unitSize,
        9 * this.unitSize,
        8 * this.unitSize,
        7 * this.unitSize,
        6 * this.unitSize,
        3 * this.unitSize
      ];
          
      this.diagStarts = [
        [this.cos * this.unitSize, (6 + 3 * this.sin) * this.unitSize],
        [0, (4 + 4 * this.sin) * this.unitSize],
        [0, (3 + 4 * this.sin) * this.unitSize],
        [0, (2 + 4 * this.sin) * this.unitSize],
        [0, (1 + 4 * this.sin) * this.unitSize],
        [this.cos * this.unitSize, (1 + 3 * this.sin) * this.unitSize],
        [this.cos * this.unitSize, 3 * this.sin * this.unitSize],
        [this.cos * 2 * this.unitSize, 2 * this.sin * this.unitSize],
        [this.cos * 3 * this.unitSize, 1 * this.sin * this.unitSize],
        [this.cos * 4 * this.unitSize, 0],
        [this.cos * 6 * this.unitSize, 0],
      ];

      this.vertStarts = [
        [0, (1 + 4 * this.sin) * this.unitSize],
        [this.cos * this.unitSize, 3 * this.sin * this.unitSize],
        [this.cos * 2 * this.unitSize, 2 * this.sin * this.unitSize],
        [this.cos * 3 * this.unitSize, 1 * this.sin * this.unitSize],
        [this.cos * 4 * this.unitSize, 0],
        [this.cos * 5 * this.unitSize, this.sin * this.unitSize],
        [this.cos * 6 * this.unitSize, 0],
        [this.cos * 7 * this.unitSize, 1 * this.sin * this.unitSize],
        [this.cos * 8 * this.unitSize, 2 * this.sin * this.unitSize],
        [this.cos * 9 * this.unitSize, 3 * this.sin * this.unitSize],
        [this.cos * 10 * this.unitSize, (1 + 4 * this.sin) * this.unitSize],
      ];

      this.counterDiagStarts = [
        [this.cos * this.unitSize, 3 * this.sin * this.unitSize],
        [0, (1 + 4 * this.sin) * this.unitSize],
        [0, (2 + 4 * this.sin) * this.unitSize],
        [0, (3 + 4 * this.sin) * this.unitSize],
        [0, (4 + 4 * this.sin) * this.unitSize],

        [this.cos * 1 * this.unitSize, (4 + 5 * this.sin) * this.unitSize],

        [this.cos * 1 * this.unitSize, (5 + 5 * this.sin) * this.unitSize],
        [this.cos * 2 * this.unitSize, (5 + 6 * this.sin) * this.unitSize],
        [this.cos * 3 * this.unitSize, (5 + 7 * this.sin) * this.unitSize],
        [this.cos * 4 * this.unitSize, (5 + 8 * this.sin) * this.unitSize],
        [this.cos * 6 * this.unitSize, (5 + 8 * this.sin) * this.unitSize],
      ];

      this.bgColor = '#000';
      this.fgColor = '#0F0';
    };

    FlatView.prototype = {
      gridPosToXY: function(diag, vert) {
        var x = this.vertStarts[vert][0];
        var y = this.diagStarts[diag][1] + (this.sin * (vert - utils.offsets[diag]) * this.unitSize);

        return [x, y];
      },
      render: function() {
        var self = this;

        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.strokeStyle = this.fgColor;

        var sx, sy, ex, ey, i;

        for (i=0; i<11; i++) {
          sx = this.diagStarts[i][0];
          sy = this.diagStarts[i][1];
          ex = sx + this.cos * this.axisLengths[i];
          ey = sy + this.sin * this.axisLengths[i];

          this.ctx.beginPath();
          this.ctx.moveTo(sx, sy);
          this.ctx.lineTo(ex, ey);
          this.ctx.stroke();
        }

        for (i=0; i<11; i++) {
          sx = this.counterDiagStarts[i][0];
          sy = this.counterDiagStarts[i][1];
          ex = sx + this.cos * this.axisLengths[i];
          ey = sy - this.sin * this.axisLengths[i];

          this.ctx.beginPath();
          this.ctx.moveTo(sx, sy);
          this.ctx.lineTo(ex, ey);
          this.ctx.stroke();
        }

        for (i=0; i<11; i++) {
          sx = this.vertStarts[i][0];
          sy = this.vertStarts[i][1];
          ey = sy + this.axisLengths[i];

          this.ctx.beginPath();
          this.ctx.moveTo(sx, sy);
          this.ctx.lineTo(sx, ey);
          this.ctx.stroke();
        }

        this.board.iter(function(value, diag, vert) {
          if (value !== 0) {
            self.drawPiece(value, diag, vert);
          }
        });
      },
      drawPiece: function(value, diag, vert) {
        var xy = this.gridPosToXY(diag, vert);
        var x = xy[0];
        var y = xy[1];

        if (value === utils.WHITE_TILE) {
          this.ctx.beginPath();
          this.ctx.fillStyle = '#FFF';
          this.ctx.arc(x, y, this.tileSize, 0, Math.PI*2);
          this.ctx.fill();
          this.ctx.stroke();
        }
      }
    };

    return FlatView;
  };

  define(['utils'], wrap);
})();

