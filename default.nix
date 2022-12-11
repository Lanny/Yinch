with import <nixpkgs> {};
let
  deps = import ./fixed-deps.nix;
in pkgs.stdenv.mkDerivation rec {
  name = "yinch";
  description = "Yinch";

  buildInputs = [
    pkgs.leiningen
    pkgs.python3
  ];

  src = ./.;

  buildPhase = ''
    export HOME=$PWD
    export LEIN_HOME=$HOME/.lein
    export LOCAL_REPO="${deps}"
    mkdir -p $LEIN_HOME

    echo "{:user {:offline? true :local-repo \"$LOCAL_REPO\"}}" > $LEIN_HOME/profiles.clj

    ${pkgs.python3}/bin/python ./combine_shaders.py
    lein cljsbuild once
  '';

  installPhase = ''
    mkdir $out
    cp -r resources/public $out/
  '';
}
