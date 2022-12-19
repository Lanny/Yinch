with import <nixpkgs> {};
pkgs.stdenv.mkDerivation rec {
  name = "yinch-deps";
  buildInputs = [ pkgs.leiningen ];
  src = nix-gitignore.gitignoreSourcePure "!project.clj" ./.;

  buildPhase = ''
    export HOME=$PWD
    export LEIN_HOME=$HOME/.lein
    mkdir -p $LEIN_HOME
    echo "{:user {:local-repo \"$LEIN_HOME/.m2\"}}" > $LEIN_HOME/profiles.clj

    ${pkgs.leiningen}/bin/lein cljsbuild deps

    find .lein -type f -regex '.+_remote\.repositories' -delete
  '';
  installPhase = ''
    mkdir -p $out
    cp -r .lein/.m2/* $out/
  '';
  outputHashAlgo = "sha256";
  outputHashMode = "recursive";
  outputHash = "Wj08iS1Fk1VVnrXSPrsvk8ahVnVm/gHB1g0OwtiUK2Y=";
}

