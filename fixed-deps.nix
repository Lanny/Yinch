with import <nixpkgs> {};
pkgs.stdenv.mkDerivation rec {
  name = "yinch-deps";
  buildInputs = [ pkgs.leiningen ];
  srcs = ./.;
  buildPhase = ''
    export HOME=$PWD
    export LEIN_HOME=$HOME/.lein
    mkdir -p $LEIN_HOME
    echo "{:user {:local-repo \"$LEIN_HOME\"}}" > $LEIN_HOME/profiles.clj

    ${pkgs.leiningen}/bin/lein cljsbuild deps
  '';
  installPhase = ''
    mkdir -p $out
    cp -r .lein/* $out/
  '';
  outputHashAlgo = "sha256";
  outputHashMode = "recursive";
  outputHash = "2BC0R6bZi+FIzkZuoDgf7quG3W1lC9hcwpaZ1SMaNVE=";
}

