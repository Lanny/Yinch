goog.require('yinch.3d-utils');
goog.provide('yinch.Ring');

;(function() {
  function Ring(gl, segments) {
    this._vertexPositionBuffer = gl.createBuffer();
    this._vertexColorBuffer = gl.createBuffer();
    this.segments = segments;

    this._init(gl);
  }

  Ring.prototype = {
    _init: function(gl) {
      var radsPerSegment = (Math.PI * 2) / this.segments,
        outervertices = [],
        innervertices = [],
        vertices,
        t;

      for (var i=0; i<this.segments; i++) {
        t = radsPerSegment * i;

        outervertices.push([Math.cos(t), Math.sin(t), 0]);
        innervertices.push([Math.cos(t) * 0.9, Math.sin(t) * 0.9, 0]);
      }

      vertices = yinch.utils.zip(outervertices, innervertices);
      vertices.push(vertices[0], vertices[1]); // Close the circle.
      vertices = yinch.utils.flatten(vertices);


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

      gl.drawArrays(gl.TRIANGLE_STRIP, 0,
                    this._vertexPositionBuffer.numItems);
    }
  };

  yinch.Ring = Ring;
})();
