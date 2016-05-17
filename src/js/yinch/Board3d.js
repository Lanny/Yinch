goog.require('yinch.glUtils');
goog.require('yinch.Geometry');
goog.require('yinch.canvas_interface');
goog.require('cljs.core');
goog.provide('yinch.Board3d');


;(function() {
  function triangleLine(v1, v2, thickness) {
    var norm = vec3.create(),
      verts = [];

    vec3.sub(norm, v1, v2);
    vec3.rotateZ(norm, norm, [0,0,0], Math.PI/2);
    vec3.normalize(norm, norm);
    vec3.scale(norm, norm, thickness / 2);

    var p1 = vec3.add([], v1, norm);
    var p2 = vec3.sub([], v1, norm);
    var p3 = vec3.add([], v2, norm);
    var p4 = vec3.sub([], v2, norm);

    verts = [
      p1,
      p2,
      p3,
      vec3.clone(p2),
      vec3.clone(p3),
      p4
    ];

    return verts;
  }

  function Board(gl) {
    var verts = [],
      lines, v1, v2, a1, a2, a3;

    a1 = cljs.core.clj__GT_js(yinch.canvas_interface.axis_set(Math.PI/2));
    a2 = cljs.core.clj__GT_js(yinch.canvas_interface.axis_set(Math.PI/6));
    a3 = cljs.core.clj__GT_js(yinch.canvas_interface.axis_set(-Math.PI/6));

    lines = yinch.glUtils.flatten([a1, a2, a3]);

    for (var i=0; i<lines.length; i++) {
      v1 = lines[i][0];
      v2 = lines[i][1];

      // Add a third dimention so they're vectors we can work with
      v1.push(0);
      v2.push(0);

      // Scale them down because they're in 2d screen space right now
      vec3.scale(v1, v1, 1/yinch.canvas_interface._STAR_unit_size_STAR_);
      vec3.scale(v2, v2, 1/yinch.canvas_interface._STAR_unit_size_STAR_);

      // And generate the triangle line for it.
      verts.push.apply(verts, triangleLine(v1, v2, 0.05));
    }

    verts = yinch.glUtils.flatten(verts);

    yinch.Geometry.call(this, gl, verts, gl.TRIANGLES);
  }

  Board.prototype = {};
  yinch.glUtils.extend(Board.prototype, yinch.Geometry.prototype);
  Board.prototype.draw = function() {
    yinch.Geometry.prototype.draw.apply(this, arguments);
  };

  yinch.Board3d = Board;
})();

