goog.require('goog.events');
goog.require('goog.math');

goog.require('yinch.shaders');
goog.require('yinch.glUtils');
goog.require('yinch.Board3d');
goog.require('yinch.Ring');
goog.require('yinch.CompassRose');

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

    this._rotRate = Math.PI / 400;
    this._zoomRate = 1 / 100;
    this._rX = -1.0;
    this._rY = 0;
    this._rZ = 0;
    this._zoomDist = -7.0;

    this._init();
  };

  yinch.glBridge.CanvasView.prototype = {
    _init: function() {
      this._shaderProgram = initShaderProgram(this._gl);
      this._gl.viewportWidth = this._canvas.width;
      this._gl.viewportHeight = this._canvas.height;

      this._gl.clearColor(0.5, 0.5, 0.5, 1.0);
      this._gl.enable(this._gl.DEPTH_TEST);

      this._cr = new yinch.CompassRose(this._gl);
      this._ring = new yinch.Ring(this._gl, 20);

      this._drawables.push(this._ring);
      this._drawables.push(new yinch.Board3d(this._gl));
      this._drawables.push(this._cr);

      this._bindHandlers();

      this.start();
    },
    _bindHandlers: function() {
      this._mouseIsDown = false;
      this._lastX = null; 
      this._lastY = null; 

      goog.events.listen(this._canvas, goog.events.EventType.MOUSEDOWN,
                         this._onMouseDown.bind(this));
      goog.events.listen(this._canvas, goog.events.EventType.MOUSEUP,
                         this._onMouseUp.bind(this));
      goog.events.listen(this._canvas, goog.events.EventType.MOUSEMOVE,
                         this._onMouseMove.bind(this));
      goog.events.listen(this._canvas, goog.events.EventType.WHEEL,
                         this._onScroll.bind(this));
    },
    _onMouseDown: function(e) {
      var NDCX = (e.offsetX / this._gl.viewportWidth - 0.5) * 2,
        NDCY = (0.5 - e.offsetY / this._gl.viewportHeight) * 2;

      var coords = yinch.glUtils.screenToMVCoords(NDCX, NDCY,
                                                  this._mvMatrix,
                                                  this._pMatrix,
                                                  this._zoomDist);
      var gridCoords = yinch.glUtils.mvToGridCoords(coords[0], coords[1]);
      console.log(gridCoords);
      this._ring.setGridPos.apply(this._ring, gridCoords);
      this._lastX = e.offsetX;
      this._lastY = e.offsetY;
      this._mouseIsDown = true;
    },
    _onMouseUp: function(e) {
      this._mouseIsDown = false;
      this._lastX = null; 
      this._lastY = null; 
    },
    _onMouseMove: function(e) {
      if (this._mouseIsDown !== true) {
        return;
      }
      var dx = this._lastX - e.offsetX,
        dy = this._lastY - e.offsetY;

      this._lastX = e.offsetX;
      this._lastY = e.offsetY;

      this._rZ += dx * this._rotRate;
      this._rX -= dy * this._rotRate;
    },
    _onScroll: function(e) {
      this._zoomDist = goog.math.clamp(
        -100.0,
        this._zoomDist - (e.event_.deltaY * this._zoomRate),
        -1.0);

      e.preventDefault();
    },
    _tick: function() {
      this._drawScene();
      requestAnimationFrame(this._tick.bind(this));
    },
    _drawScene: function() {
      this._gl.viewport(0, 0, this._gl.viewportWidth, this._gl.viewportHeight);
      this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);

      mat4.identity(this._mvMatrix);
      mat4.translate(this._mvMatrix, this._mvMatrix, [0.0, 0.0, this._zoomDist]);

      mat4.rotateX(this._mvMatrix, this._mvMatrix, this._rX);
      mat4.rotateY(this._mvMatrix, this._mvMatrix, this._rY);
      mat4.rotateZ(this._mvMatrix, this._mvMatrix, this._rZ);

      var aspectRatio = this._gl.viewportWidth / this._gl.viewportHeight;
      mat4.perspective(this._pMatrix, 45, aspectRatio, 0.1, 100.0);

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
