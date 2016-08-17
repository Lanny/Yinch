goog.require('yinch.glUtils');
goog.require('yinch.Geometry');
goog.provide('yinch.Ring');

;(function() {
  var OUTER_RADIUS = 0.4,
    INNER_RADIUS = 0.3,
    THICKNESS = 0.1,
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


  function Ring(gl, segments) {
    this.segments = segments;
    this.geometry = [];

    this._maj = 5;
    this._mn = 5;

    this._init(gl);

    gr = this;
  }

  Ring.prototype = {
    _init: function(gl) {
      var vs;

      // Top plate
      vs = makePlate(this.segments, INNER_RADIUS, OUTER_RADIUS);
      yinch.glUtils.addToVertArray(vs, [0, 0, -THICKNESS]);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new yinch.Geometry(gl, vs));

      // Bottom plate
      vs = makePlate(this.segments, INNER_RADIUS, OUTER_RADIUS);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new yinch.Geometry(gl, vs));

      // Inner band
      vs = makeBand(this.segments, INNER_RADIUS, THICKNESS);
      yinch.glUtils.addToVertArray(vs, [0, 0, -THICKNESS/2]);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new yinch.Geometry(gl, vs));

      // Outer band
      vs = makeBand(this.segments, OUTER_RADIUS, THICKNESS);
      yinch.glUtils.addToVertArray(vs, [0, 0, -THICKNESS/2]);
      vs = yinch.glUtils.flatten(vs);

      this.geometry.push(new yinch.Geometry(gl, vs));

      vs = [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0];
    },
    setGridPos: function(maj, mn) {
      this._maj = maj;
      this._mn = mn;
    },
    draw: function(gl, shaderProgram, mvMatrix, pMatrix) {
      var posMatrix = mat4.create(),
        transVec = yinch.glUtils.gridToMVCoords(this._maj, this._mn);

      transVec.push(0.0); // Add a 0 for the Z dim

      mat4.translate(posMatrix, mvMatrix, transVec); 

      for (var i=0; i<this.geometry.length; i++) {
        this.geometry[i].draw(gl, shaderProgram, posMatrix, pMatrix);
      }
    }
  };

  yinch.Ring = Ring;
})();
