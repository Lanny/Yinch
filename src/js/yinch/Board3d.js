goog.require('yinch.glUtils');
goog.require('yinch.Geometry');
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
      //vec3.clone(p2),
      //vec3.clone(p3),
      p4
    ];

    return verts;
  }

  function Board(gl) {
    var verts = [];

    verts.push.apply(verts, triangleLine([0,0,0], [1.0, 0, 0], 0.2));
    console.log(verts);
    verts = yinch.glUtils.flatten(verts);

    yinch.Geometry.call(this, gl, verts);//, gl.TRIANGLES);
  }

  Board.prototype = {};
  yinch.glUtils.extend(Board.prototype, yinch.Geometry.prototype);
  Board.prototype.draw = function() {
    yinch.Geometry.prototype.draw.apply(this, arguments);
  };

  yinch.Board3d = Board;
})();

