;(function() {
  requirejs(['game', 'utils', 'lib/domReady'],
    function(Game, utils, domReady) {
      domReady(function() {
        var canvas = document.getElementById('primaryCanvas');
        var myGame = new Game(canvas);

        myGame.start();
      });
    });
})();
