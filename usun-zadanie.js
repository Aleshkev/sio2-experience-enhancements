// ==UserScript==
// @name         Usuń "Zadanie"
// @namespace    https://aleshkev.github.io/
// @version      0.1
// @description  Usuwa tekst "Zadanie" przed prawdziwą nazwą zadania.
// @author       Jonas Aleshkevich
// @match        https://sio2.staszic.waw.pl/*
// @grant        none
// ==/UserScript==

// ↑ I will add another pages this should run on when I encounter some.

(function () {
  'use strict';

  let options = $("*");
  options.each(i => {
    let o = options[i];
    if(o.text != o.innerHTML) return;  // Skip complex elements.
    o.innerHTML = o.innerHTML.replace(/^zadanie\s+/gi, "");  // Be gone, you ugly piece of garbage!!
  });

})();
