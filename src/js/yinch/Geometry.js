goog.require('yinch.glUtils');
goog.provide('yinch.Geometry');

;(function() {
  function Geometry(gl, verticies, drawType) {
    this._vertexPositionBuffer = gl.createBuffer();
    this._vertexColorBuffer = gl.createBuffer();
    this._drawType = drawType || gl.TRIANGLE_STRIP;

    this._init(gl, verticies);
  }

  Geometry.prototype = {
    _init: function(gl, vertices) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexPositionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      this._vertexPositionBuffer.itemSize = 3;
      this._vertexPositionBuffer.numItems = vertices.length / 3;

      this.setSolidColor(gl, [1.0, 0.0, 1.0, 1.0]);
    },
    draw: function(gl, shaderProgram, mvMatrix, pMatrix) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexPositionBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
                             this._vertexPositionBuffer.itemSize, gl.FLOAT,
                             false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexColorBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,
                             this._vertexColorBuffer.itemSize, gl.FLOAT,
                             false, 0, 0);

      gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
      gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);

      gl.drawArrays(this._drawType, 0, this._vertexPositionBuffer.numItems);
    },
    setVertexColorBuffer: function(buffer) {
      this._vertexColorBuffer = buffer;
    },
    setSolidColor: function(gl, color) {
      var buffer = gl.createBuffer(),
        colors = [];

      for (var i=0; i < this._vertexPositionBuffer.numItems; i++) {
        colors.push.apply(colors, color);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

      buffer.itemSize = color.length;
      buffer.numItems = colors.length / color.length;

      this.setVertexColorBuffer(buffer);
    }
  }

  yinch.Geometry = Geometry;
})();
