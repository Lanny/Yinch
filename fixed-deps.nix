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

    find .lein -type f -regex '.+_remote\.repositories' -delete
  '';
  installPhase = ''
    mkdir -p $out
    cp -r .lein/* $out/
  '';
  outputHashAlgo = "sha256";
  outputHashMode = "recursive";
  outputHash = "GA9Y7Cov3fq/BAJaYGzhIpk3FiaJ0MxfiTJlWc8i0kc=";
}

