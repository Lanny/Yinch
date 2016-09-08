goog.require('goog.inherits');
goog.require('goog.mixin');

goog.require('yinch.glUtils');
goog.require('yinch.Geometry');
goog.require('yinch.Draggable');
goog.require('yinch.ComplexGeometry');

goog.provide('yinch.Ring');

;(function() {
  var OUTER_RADIUS = 0.4,
    INNER_RADIUS = 0.3,
    THICKNESS = 0.1;

  function Ring(gl, player, segments) {
    yinch.Draggable.call(this);
    yinch.ComplexGeometry.call(this);

    this.segments = segments || 20;
    this.player = player;

    this._init(gl);
  }

  goog.inherits(Ring, yinch.Draggable);

  Ring.prototype._init = function(gl) {
    var vs;

    // Top ring
    vs = yinch.glUtils.makeFlatRing(this.segments, INNER_RADIUS, OUTER_RADIUS);
    yinch.glUtils.addToVertArray(vs, [0, 0, THICKNESS]);
    vs = yinch.glUtils.flatten(vs);

    this.geometry.push(new yinch.Geometry(gl, vs));

    // Bottom ring
    vs = yinch.glUtils.makeFlatRing(this.segments, INNER_RADIUS, OUTER_RADIUS);
    vs = yinch.glUtils.flatten(vs);

    this.geometry.push(new yinch.Geometry(gl, vs));

    // Inner band
    vs = yinch.glUtils.makeBand(this.segments, INNER_RADIUS, THICKNESS);
    yinch.glUtils.addToVertArray(vs, [0, 0, THICKNESS/2]);
    vs = yinch.glUtils.flatten(vs);

    this.geometry.push(new yinch.Geometry(gl, vs));

    // Outer band
    vs = yinch.glUtils.makeBand(this.segments, OUTER_RADIUS, THICKNESS);
    yinch.glUtils.addToVertArray(vs, [0, 0, THICKNESS/2]);
    vs = yinch.glUtils.flatten(vs);

    this.geometry.push(new yinch.Geometry(gl, vs));

    colorVec = (this.player === 'white') ?
        [1.0, 1.0, 1.0, 1.0] :
        [0.0, 0.0, 0.0, 1.0];

    this.geometry.map(function(geo) {
      geo.setSolidColor(gl, colorVec);
    });
  };

  goog.mixin(Ring.prototype, yinch.ComplexGeometry.prototype);

  yinch.Ring = Ring;
})();
