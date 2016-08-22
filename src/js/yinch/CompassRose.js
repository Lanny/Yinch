goog.require('yinch.Geometry');
goog.provide('yinch.CompassRose');

;(function() {
  function CompassRose(gl, scale) {
    this._scale = scale || 1.0;
    this._position = mat4.create();

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
    setModelPosition: function(transVec) {
      mat4.identity(this._position);
      mat4.translate(this._position, this._position, transVec);
    },
    draw: function(gl, shaderProgram, mvMatrix, pMatrix) {
      var mvPos = mat4.create();
      mat4.multiply(mvPos, mvMatrix, this._position); 
      
      this._geometry.draw(gl, shaderProgram, mvPos, pMatrix);
    }
  };

  yinch.CompassRose = CompassRose;
})();

