;(function() {
  requirejs(['board', 'flat-view', 'utils', 'lib/domReady'],
    function(Board, View, utils, domReady) {
      domReady(function() {
        var canvas = document.getElementById('primaryCanvas');
        var myBoard = new Board();
        var myView = new View(canvas, myBoard);
        
        myView.render();
      });
    });
})();
