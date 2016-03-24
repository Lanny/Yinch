goog.require('yinch.shaders')
goog.provide('yinch.glBridge');

;(function() {
  function loadShader(gl, name, type) {
    if (!(type in gl)) {
      throw new Error('Unexpected shader type: ' + type);
    }

    if (!(name in yinch.shaders)) {
      throw new Error('No shader with name: ' + name);
    }

    var shader = gl.createShader(gl[type]);
    gl.shaderSource(shader, yinch.shaders[name]);
    gl.combileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      var err = new Error('Error compiling shader named: ' + name);
      err.glInfo = gl.getShaderInfoLog(shader);
      err.shader = shader;

      throw err;
    }

    return shader;
  }

  yinch.glBridge.CanvasView = function(canvas, options) {
    this._interactionCallback = function() {};
    this._canvas = canvas;
    this._gl = canvas.getContext('experimental-webgl');

    this._init();
  };

  yinch.glBridge.CanvasView.prototype = {
    _init: function() {

    },
    offerState: function(state) {
    },
    offerStatus: function(status) {
    },
    registerInteractionCallback: function(cb) {
      this._interactionCallback = cb;
    }
  };
})();