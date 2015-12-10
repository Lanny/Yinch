# Yinch

Browser implementation of the the board game Yinsh.

## REPL
If you've done a project that uses cljsbulid before this should be pretty straight forward but this was my first setting it up and it was kind of a pain. Also it's not exactly intuitive to fire up. First you have to start the ring server (just serving statics for now):

```
$ lein ring server 3000
```

Then you have to fireup the repl like so:

```
$ lein trampoline cljsbuild repl-launch chrome
```

Note that `chrome` must be resolve in your environment to the chrome executable. The easier way of doing this if you don't want to mess around with linking it in your path would be to start the listener:

```
$ lein trampoline cljsbuild repl-listen
```

and navigate to [http://localhost:3000/repl.html](http://localhost:3000/repl.html) in your browser manually.


## License

Copyright © 2015 Ryan "Lanny" Jenkins

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; version 2.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
