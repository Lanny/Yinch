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
    var vpMat = [],
      invVPMat = [],
      pos = [NDCX, NDCY, 0.0, 1.0];

    mat4.multiply(vpMat, pMatrix, mvMatrix);
    mat4.invert(invVPMat, vpMat);

    vec3.transformMat4(pos, pos, invVPMat);

    //var cPos = [0, 0, 0.0, 0];
    //vec3.transformMat4(cPos, cPos, mvMatrix);
    var invMVMat = mat4.create();
    mat4.invert(invMVMat, mvMatrix);
    var cPos = [invMVMat[12], invMVMat[13], invMVMat[14], invMVMat[15]];

    var viewLine = vec3.create();
    vec3.subtract(viewLine, pos, cPos);
    console.log('cPos:', cPos);

    var scaleFactor = 0 - pos[2] / viewLine[2];

    console.log('pos', pos);
    console.log('viewLine', viewLine);
    console.log('sf', scaleFactor);
    vec3.scale(viewLine, viewLine, scaleFactor);

    console.log('vl:', viewLine);

    vec3.add(pos, pos, viewLine);

    return pos;
  };
})();
