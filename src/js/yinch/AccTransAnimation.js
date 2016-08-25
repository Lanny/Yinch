goog.require('yinch.glUtils');

goog.provide('yinch.AccTransAnimation');

;(function() {
  function AccTransAnimation(matrixUnderTransform, transVec, duration) {
    this._mat = matrixUnderTransform;
    this._origMat = mat4.clone(matrixUnderTransform);

    this._transVec = transVec;
    this._running = false;
    this._elapsedTime = 0.0;
    this._duration = duration;
    this._accRate = (duration * duration) / (2 * vec3.length(transVec));
  }

  AccTransAnimation.prototype = {
    start: function() {
      this._running = true;
    },
    pause: function() {
      this._running = false;
    },
    tick: function(delta) {
      var p = (this._accRate * this._elapsedTime * this._elapsedTime) / 2;

      if (this._p >= 1.0) {
        this._running = false;

        mat4.translate(this._mat, this._origMat, this._transVec);

        return false;
      } else {
        console.log(p);
        var tweenVec = vec3.create();
        vec3.scale(tweenVec, this._transVec, p);
        mat4.translate(this._mat, this._origMat, this._transVec);
      }
    }
  };

  yinch.AccTransAnimation = AccTransAnimation;
})();
