goog.require('yinch.glUtils');
goog.provide('yinch.Geometry');

;(function() {
  function Geometry(gl, verticies) {
    this._vertexPositionBuffer = gl.createBuffer();
    this._vertexColorBuffer = gl.createBuffer();

    this._init(gl, verticies);
  }

  Geometry.prototype = {
    _init: function(gl, vertices, drawType) {
      this._drawType = drawType || gl.TRIANGLE_STRIP;

      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexPositionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      this._vertexPositionBuffer.itemSize = 3;
      this._vertexPositionBuffer.numItems = vertices.length / 3;

      var colors = [];
      for (var i=0; i < vertices.length / 3; i++) {
        colors.push(0.5, 0.5, 1.0, 1.0);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexColorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
      this._vertexColorBuffer.itemSize = 4;
      this._vertexColorBuffer.numItems = colors.length / 4;

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
    }
  }

  yinch.Geometry = Geometry;
})();
