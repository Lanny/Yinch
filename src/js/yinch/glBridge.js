goog.require('yinch.shaders');
goog.require('yinch.Ring');
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
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      var err = new Error('Error compiling shader named: ' + name);
      err.glInfo = gl.getShaderInfoLog(shader);
      err.shader = shader;

      throw err;
    }

    return shader;
  }

  function initShaderProgram(gl) {
    var fragmentShader = loadShader(gl, 'shader-fs', 'FRAGMENT_SHADER');
    var vertexShader = loadShader(gl, 'shader-vs', 'VERTEX_SHADER');
    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      throw new Error('Could not initialize shaders.');
    }

    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(
      shaderProgram, 'aVertexPosition');
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    shaderProgram.vertexColorAttribute = gl.getAttribLocation(
      shaderProgram, 'aVertexColor');
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

    shaderProgram.pMatrixUniform = gl.getUniformLocation(
      shaderProgram, 'uPMatrix');
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(
      shaderProgram, 'uMVMatrix');

    return shaderProgram;
  }

  yinch.glBridge.CanvasView = function(canvas, options) {
    this._interactionCallback = function() {};
    this._canvas = canvas;
    this._gl = canvas.getContext('experimental-webgl');
    this._mvMatrix = mat4.create();
    this._pMatrix = mat4.create();
    this._drawables = [];

    this._init();

  };

  var rot = 0;

  yinch.glBridge.CanvasView.prototype = {
    _init: function() {
      this._shaderProgram = initShaderProgram(this._gl);
      this._gl.viewportWidth = this._canvas.width;
      this._gl.viewportHeight = this._canvas.height;

      this._gl.clearColor(0.0, 0.0, 0.0, 1.0);
      this._gl.enable(this._gl.DEPTH_TEST);

      this._drawables.push(new yinch.Ring(this._gl, 20));

      this.start();
    },
    _tick: function() {
      this._drawScene();
      rot += Math.PI/100;
      requestAnimationFrame(this._tick.bind(this));
    },
    _drawScene: function() {
      this._gl.viewport(0, 0, this._gl.viewportWidth, this._gl.viewportHeight);
      this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);

      var aspectRatio = this._gl.viewportWidth / this._gl.viewportHeight;
      mat4.perspective(this._pMatrix, 45, aspectRatio, 0.1, 100.0);

      mat4.identity(this._mvMatrix);
      mat4.translate(this._mvMatrix, this._mvMatrix, [-1.5, 0.0, -7.0]);
      mat4.rotateX(this._mvMatrix, this._mvMatrix, rot);

      for (var i=0; i<this._drawables.length; i++) {
        this._drawables[i].draw(this._gl, this._shaderProgram, this._mvMatrix,
                                this._pMatrix);
      }

    },
    start: function() {
      this._tick();
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
