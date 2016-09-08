goog.require('yinch.glUtils');
goog.require('yinch.Geometry');
goog.require('yinch.AccTransAnimation');

goog.provide('yinch.ComplexGeometry');

;(function() {
  function ComplexGeometry() {
    this.geometry = [];
    this._maj = 5;
    this._mn = 5;
    this._posMatrix = mat4.create();

    this._dropping = false;
    this._dropRate = 1.0;

    this.setGridPos(this._maj, this._mn);
  }

  ComplexGeometry.prototype.drop = function(height) {
    height = height || 1.0;

    mat4.translate(this._posMatrix, this._posMatrix, [0, 0, height]);

    var anim = new yinch.AccTransAnimation(this._posMatrix, [0,0,0-height], 0.2);
    anim.start();

    return anim;
  };
  
  ComplexGeometry.prototype.setGridPos = function(maj, mn) {
    this._maj = maj;
    this._mn = mn;

    var transVec = yinch.glUtils.gridToMVCoords(maj, mn);
    transVec.push(0.0);

    mat4.identity(this._posMatrix);
    mat4.translate(this._posMatrix, this._posMatrix, transVec);
  };
  
  ComplexGeometry.prototype.getGridPos = function() {
    return [this._maj, this._mn];
  };
  
  ComplexGeometry.prototype.draw = function(gl, shaderProgram, mvMatrix, pMatrix) {
    var liveMatrix = mat4.create();
    mat4.multiply(liveMatrix, mvMatrix, this._posMatrix);

    for (var i=0; i<this.geometry.length; i++) {
      this.geometry[i].draw(gl, shaderProgram, liveMatrix, pMatrix);
    }
  };
  
  yinch.ComplexGeometry = ComplexGeometry;
})();

