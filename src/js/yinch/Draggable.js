goog.require('yinch.glUtils');

goog.provide('yinch.Draggable');

;(function() {
  function Draggable(positionMatrixName) {
    this._posMatrixName = positionMatrixName || '_posMatrix';
  }

  Draggable.prototype = {
    notifyOfDrag: function(boardPlaneCoords) {
      var posMatrix = this[this._posMatrixName];

      mat4.identity(posMatrix);
      mat4.translate(posMatrix, posMatrix, boardPlaneCoords);
      mat4.translate(posMatrix, posMatrix, [0, 0, 0.4]);
    }
  };

  yinch.Draggable = Draggable;
})();

