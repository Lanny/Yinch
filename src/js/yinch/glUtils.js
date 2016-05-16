goog.provide('yinch.glUtils');

;(function() {
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
      console.log(v);
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
})();
