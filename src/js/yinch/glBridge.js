goog.require('yinch.shaders');
//goog.require('goog.math.Matrix');
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

  function zip() {
    var totalLength = 0;

    for (var i=0; i<arguments.length; i++) {
      totalLength += arguments[i].length;
    }

    var zipped = new Array(totalLength),
      k = 0,
      j; 
    i = 0;

    while (i < totalLength) {
      for (j=0; j<arguments.length; j++) {
        if (k < arguments[j].length) {
          zipped[i] = arguments[j][k];
          i++
        }
      }

      k++;
    }

    return zipped;
  };

  function flatten(arr) {
    var flattened = [];

    for (var i=0; i<arr.length; i++) {
      for (var k=0; k<arr[i].length; k++) {
        flattened.push(arr[i][k]);
      }
    }

    return flattened;
  };

  function Ring(gl, segments) {
    this._vertexPositionBuffer = gl.createBuffer();
    this._vertexColorBuffer = gl.createBuffer();
    this.segments = segments;

    this._init(gl);
  }

  Ring.prototype = {
    _init: function(gl) {
      var radsPerSegment = (Math.PI * 2) / this.segments,
        outervertices = [],
        innervertices = [],
        vertices,
        t;

      for (var i=0; i<this.segments; i++) {
        t = radsPerSegment * i;

        outervertices.push([Math.cos(t), Math.sin(t), 0]);
        innervertices.push([Math.cos(t) * 0.9, Math.sin(t) * 0.9, 0]);
      }

      vertices = zip(outervertices, innervertices);
      vertices.push(vertices[0], vertices[1]); // Close the circle.
      vertices = flatten(vertices);


      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexPositionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      this._vertexPositionBuffer.itemSize = 3;
      this._vertexPositionBuffer.numItems = vertices.length / 3;

      var colors = [];
      for (var i=0; i < vertices.length / 3; i++) {
        colors.push(0.5, 0.5, 1.0, 1.0);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexColorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
      this._vertexColorBuffer.itemSize = 4;
      this._vertexColorBuffer.numItems = colors.length / 4;
    },
    draw: function(gl, shaderProgram, mvMatrix, pMatrix) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexPositionBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
                             this._vertexPositionBuffer.itemSize, gl.FLOAT,
                             false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexColorBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,
                             this._vertexColorBuffer.itemSize, gl.FLOAT,
                             false, 0, 0);

      gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
      gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0,
                    this._vertexPositionBuffer.numItems);
    }
  };

  yinch.glBridge.CanvasView = function(canvas, options) {
    this._interactionCallback = function() {};
    this._canvas = canvas;
    this._gl = canvas.getContext('experimental-webgl');
    this._mvMatrix = mat4.create();
    this._pMatrix = mat4.create();
    this._drawables = [];

    this._init();
  };

  yinch.glBridge.CanvasView.prototype = {
    _init: function() {
      this._shaderProgram = initShaderProgram(this._gl);
      this._gl.viewportWidth = this._canvas.width;
      this._gl.viewportHeight = this._canvas.height;

      this._gl.clearColor(0.0, 0.0, 0.0, 1.0);
      this._gl.enable(this._gl.DEPTH_TEST);

      this._drawables.push(new Ring(this._gl, 20));

      this._drawScene();
    },
    _requestAnimationFrame: window.requestAnimationFrame ||
      function(callback) { window.setTimeout(callback, 1000/60); },
    _tick: function() {
      this._drawScene();
      this._requestAnimationFrame(this._tick.bind(this));
    },
    _drawScene: function() {
      this._gl.viewport(0, 0, this._gl.viewportWidth, this._gl.viewportHeight);
      this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);

      var aspectRatio = this._gl.viewportWidth / this._gl.viewportHeight;
      mat4.perspective(this._pMatrix, 45, aspectRatio, 0.1, 100.0);

      mat4.identity(this._mvMatrix);
      mat4.translate(this._mvMatrix, this._mvMatrix, [-1.5, 0.0, -7.0]);
      // mat4.rotateX(this._mvMatrix, this._mvMatrix, Math.PI/3);

      for (var i=0; i<this._drawables.length; i++) {
        this._drawables[i].draw(this._gl, this._shaderProgram, this._mvMatrix,
                                this._pMatrix);
      }

    },
    start: function() {
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
