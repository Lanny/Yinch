goog.require('yinch.glUtils');

goog.provide('yinch.Draggable');

;(function() {
  function Draggable(positionMatrixName) {
    this._posMatrixName = positionMatrixName || '_posMatrix';
    this._initialMatrix = null;
  }

  Draggable.prototype = {
    dragStart: function() {
      this._initialMatrix = mat4.clone(this[this._posMatrixName]);
    },
    dragEnd: function(finalCoord, reset) {
      reset = reset || (reset === undefined) ? true : false;

      if (reset) {
        mat4.copy(this[this._posMatrixName], this._initialMatrix);
      }
    },
    dragMotion: function(boardPlaneCoords) {
      var posMatrix = this[this._posMatrixName];

      mat4.identity(posMatrix);
      mat4.translate(posMatrix, posMatrix, boardPlaneCoords);
      mat4.translate(posMatrix, posMatrix, [0, 0, 0.4]);
    }
  };

  yinch.Draggable = Draggable;
})();

