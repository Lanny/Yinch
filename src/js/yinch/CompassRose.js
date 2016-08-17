goog.require('yinch.Geometry');
goog.provide('yinch.CompassRose');

;(function() {
  function CompassRose(gl, scale) {
    this._scale = scale || 1.0;

    this._init(gl);
  }

  CompassRose.prototype = {
    _init: function(gl) {
      var verts = [
        0.0, 0.0, 0.0,
        this._scale, 0.0, 0.0,
        0.0, 0.0, 0.0,
        0.0, this._scale, 0.0,
        0.0, 0.0, 0.0,
        0.0, 0.0, this._scale
      ];

      this._geometry = new yinch.Geometry(gl, verts, gl.LINES);

      var colorBuffer = gl.createBuffer()
        colors = [
          1.0, 0.0, 0.0, 1.0,
          1.0, 0.0, 0.0, 1.0,
          0.0, 1.0, 0.0, 1.0,
          0.0, 1.0, 0.0, 1.0,
          0.0, 0.0, 1.0, 1.0,
          0.0, 0.0, 1.0, 1.0,
        ];

      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

      colorBuffer.itemSize = 4;
      colorBuffer.numItems = 6;

      this._geometry.setVertexColorBuffer(colorBuffer);
    },
    draw: function(gl, shaderProgram, mvMatrix, pMatrix) {
      this._geometry.draw(gl, shaderProgram, mvMatrix, pMatrix);
    }
  };

  yinch.CompassRose = CompassRose;
})();

