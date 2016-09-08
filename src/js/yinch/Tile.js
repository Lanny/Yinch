goog.require('goog.mixin');

goog.require('yinch.glUtils');
goog.require('yinch.Geometry');
goog.require('yinch.ComplexGeometry');

goog.provide('yinch.Tile');

;(function() {
  var OUTER_RADIUS = 0.3,
    INNER_RADIUS = 0.25,
    GREAT_THICKNESS = 0.1,
    LESSER_THICKNESS = 0.03;

  var _LIP_HEIGHT = (GREAT_THICKNESS - LESSER_THICKNESS) / 2;

  function Tile(gl, player, segments) {
    yinch.Draggable.call(this);
    yinch.ComplexGeometry.call(this);

    this.segments = segments || 20;
    this.player = player;

    this._init(gl);
  }

  goog.inherits(Tile, yinch.Draggable);

  Tile.prototype._init = function(gl) {
    var vs, geo;

    // Top plate
    vs = yinch.glUtils.makePlate(this.segments, INNER_RADIUS);
    yinch.glUtils.addToVertArray(vs, [0, 0, LESSER_THICKNESS + _LIP_HEIGHT]);
    vs = yinch.glUtils.flatten(vs);
    geo = new yinch.Geometry(gl, vs);
    geo.setSolidColor(gl, [1.0, 1.0, 1.0, 1.0]);

    this.geometry.push(geo);

    // Bottom plate
    vs = yinch.glUtils.makePlate(this.segments, INNER_RADIUS);
    yinch.glUtils.addToVertArray(vs, [0, 0, _LIP_HEIGHT]);
    vs = yinch.glUtils.flatten(vs);
    geo = new yinch.Geometry(gl, vs);
    geo.setSolidColor(gl, [0.0, 0.0, 0.0, 1.0]);

    this.geometry.push(geo);

    // Outer band
    vs = yinch.glUtils.makeBand(this.segments, OUTER_RADIUS, GREAT_THICKNESS);
    yinch.glUtils.addToVertArray(vs, [0, 0, GREAT_THICKNESS / 2.0]);
    vs = yinch.glUtils.flatten(vs);
    geo = new yinch.Geometry(gl, vs);
    geo.setSolidColor(gl, [0.1, 0.1, 0.8, 1.0]);

    this.geometry.push(geo);

    // Upper lip
    vs = yinch.glUtils.makeFlatRing(this.segments, INNER_RADIUS, OUTER_RADIUS);
    yinch.glUtils.addToVertArray(vs, [0, 0, GREAT_THICKNESS]);
    vs = yinch.glUtils.flatten(vs);
    geo = new yinch.Geometry(gl, vs);
    geo.setSolidColor(gl, [0.1, 0.1, 0.8, 1.0]);

    this.geometry.push(geo);

    // Upper band
    vs = yinch.glUtils.makeBand(this.segments, INNER_RADIUS, _LIP_HEIGHT);
    yinch.glUtils.addToVertArray(
      vs, [0, 0, GREAT_THICKNESS - _LIP_HEIGHT / 2.0]);
    vs = yinch.glUtils.flatten(vs);
    geo = new yinch.Geometry(gl, vs);
    geo.setSolidColor(gl, [0.2, 0.2, 0.2, 1.0]);

    this.geometry.push(geo);

    // Lower lip
    vs = yinch.glUtils.makeFlatRing(this.segments, INNER_RADIUS, OUTER_RADIUS);
    vs = yinch.glUtils.flatten(vs);
    geo = new yinch.Geometry(gl, vs);
    geo.setSolidColor(gl, [0.1, 0.1, 0.8, 1.0]);

    this.geometry.push(geo);

    // Lower band
    vs = yinch.glUtils.makeBand(this.segments, INNER_RADIUS, _LIP_HEIGHT);
    yinch.glUtils.addToVertArray(vs, [0, 0, _LIP_HEIGHT / 2.0]);
    vs = yinch.glUtils.flatten(vs);
    geo = new yinch.Geometry(gl, vs);
    geo.setSolidColor(gl, [0.2, 0.2, 0.2, 1.0]);

    this.geometry.push(geo);
  };

  goog.mixin(Tile.prototype, yinch.ComplexGeometry.prototype);

  yinch.Tile = Tile;
})();
