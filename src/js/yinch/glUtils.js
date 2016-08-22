goog.provide('yinch.glUtils');

;(function() {
  yinch.glUtils.extend = function() {
    var targetObj = arguments[0];

    for (var i=1; i<arguments.length; i++) {
      for (var key in arguments[i]) {
        targetObj[key] = arguments[i][key];
      }
    }

    return targetObj;
  };

  yinch.glUtils.zip = function() {
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

  yinch.glUtils.flatten = function(arr) {
    var flattened = [];

    for (var i=0; i<arr.length; i++) {
      for (var k=0; k<arr[i].length; k++) {
        flattened.push(arr[i][k]);
      }
    }

    return flattened;
  };

  yinch.glUtils.addToVertArray = function(arr, v) {
    for (var i=0; i<arr.length; i++) {
      vec3.add(arr[i], arr[i], v);
    }

    return arr;
  }

  yinch.glUtils.transformMat3VertArray = function(arr, m) {
    for (var i=0; i<arr.length; i++) {
      vec3.transformMat3(arr[i], arr[i], m);
    }

    return arr;
  }


  yinch.glUtils.gridToMVCoords = function(maj, mn) {
    var dMaj = maj - 5.0,
      dMn = mn - 5.0,
      x = dMn * Math.cos(Math.PI / 6),
      y = -dMaj - (-dMn * Math.sin(Math.PI / 6));

    return [x, y];
  };

  yinch.glUtils.screenToMVCoords = function(NDCX, NDCY, mvMatrix, pMatrix) {
    /* Adventures in not really knowing how to do 3d graphics:
     * Check it, if we take a screen coord, make a fake NDC vector out of it,
     * and multiply it by the combined model-view and perspective matrix we
     * get back _a_ solution to the line projected from the screen into the
     * scene. HOWEVER when the only meaningful place to click is on a 2D board
     * the solution we actually want is the one with Z=0. If I was better at
     * math I could come up with an analytic solution to that. BUT IM NOT so
     * instead I compute the "camera position", the vector between it and the
     * given solution, scale that (camera-to-solution) vector by the necessary
     * value such that when added to the solution vector has Z=0. Meaning that
     * the sum this vector and the one know solution is the positon on the
     * game board that lies on the line from the click position projecting
     * into the scene.
     */
    var invVPMat = mat4.create(),
      invMVMat = mat4.create(),
      pos = [NDCX, NDCY, 0.0, 1.0],
      viewLine = vec3.create();

    // Compute camera position
    mat4.invert(invMVMat, mvMatrix);
    var cPos = [invMVMat[12], invMVMat[13], invMVMat[14], invMVMat[15]];

    // Compute a solution to the click-line
    mat4.multiply(invVPMat, pMatrix, mvMatrix);
    mat4.invert(invVPMat, invVPMat);
    vec3.transformMat4(pos, pos, invVPMat);


    // Calculate vector between camera and known solution
    vec3.subtract(viewLine, pos, cPos);

    // Scale delta vector and add it to know solution to produce a new solution
    // with Z=0
    var scaleFactor = 0 - pos[2] / viewLine[2];
    vec3.scale(viewLine, viewLine, scaleFactor);
    vec3.add(pos, pos, viewLine);

    return pos;
  };
})();
