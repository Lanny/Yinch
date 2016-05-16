goog.require('yinch.glUtils');
goog.provide('yinch.Ring');

;(function() {
  var OUTER_RADIUS = 1.0,
    INNER_RADIUS = 0.8,
    THICKNESS = 0.2,
    FLIP_Y = mat4.create();

  mat4.rotateY(FLIP_Y, FLIP_Y, Math.PI);

  function makeCircle(segments, radius) {
    radius = radius || 1.0;

    var vertices = new Array(segments),
      radsPerSegment = (Math.PI * 2) / segments;

    for (var i=0; i<segments; i++) {
      t = radsPerSegment * i;
      vertices[i] = [Math.cos(t) * radius, Math.sin(t) * radius, 0];
    }

    return vertices;
  }

  function makePlate(segments, innerRadius, outerRadius) {
    var innerVerts = makeCircle(segments, innerRadius),
      outerVerts = makeCircle(segments, outerRadius),
      combinedVerts = yinch.glUtils.zip(innerVerts, outerVerts);

    combinedVerts.push(
      vec3.clone(combinedVerts[0]),
      vec3.clone(combinedVerts[1]));

    return combinedVerts;
  }

  function makeBand(segments, radius, width) {
    var topVerts = makeCircle(segments, radius),
      bottomVerts = makeCircle(segments, radius),
      halfWidth = width / 2,
      combinedVerts;

    for (var i=0; i<topVerts.length; i++) {
      topVerts[i][2] += halfWidth;
      bottomVerts[i][2] -= halfWidth;
    }

    combinedVerts = yinch.glUtils.zip(topVerts, bottomVerts);
    combinedVerts.push(vec3.clone(combinedVerts[0]),
                       vec3.clone(combinedVerts[1]));

    return combinedVerts;
  }

  function Geometry(gl, verticies) {
    this._vertexPositionBuffer = gl.createBuffer();
    this._vertexColorBuffer = gl.createBuffer();

    this._init(gl, verticies);
  }

  Geometry.prototype = {
    _init: function(gl, vertices) {
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
  }

  function Ring(gl, segments) {
    this.segments = segments;
    this.geometry = [];

    this._init(gl);
  }

  Ring.prototype = {
    _init: function(gl) {
      var vs;

      // Top plate
      vs = makePlate(this.segments, INNER_RADIUS, OUTER_RADIUS);
      yinch.glUtils.addToVertArray(vs, [0, 0, THICKNESS/2]);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new Geometry(gl, vs));

      // Bottom plate
      vs = makePlate(this.segments, INNER_RADIUS, OUTER_RADIUS);
      yinch.glUtils.addToVertArray(vs, [0, 0, -THICKNESS/2]);
      console.log(vs);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new Geometry(gl, vs));

      // Inner band
      vs = makeBand(this.segments, INNER_RADIUS, THICKNESS);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new Geometry(gl, vs));

      // Outer band
      vs = makeBand(this.segments, OUTER_RADIUS, THICKNESS);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new Geometry(gl, vs));
    },
    draw: function(gl, shaderProgram, mvMatrix, pMatrix) {
      for (var i=0; i<this.geometry.length; i++) {
        this.geometry[i].draw(gl, shaderProgram, mvMatrix, pMatrix);
      }
    }
  };

  yinch.Ring = Ring;
})();
