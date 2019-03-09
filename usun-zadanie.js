// ==UserScript==
// @name         Usuń "Zadanie"
// @namespace    https://github.com/Aleshkev/sio2-experience-enhancements
// @downloadURL  https://raw.githubusercontent.com/Aleshkev/sio2-experience-enhancements/master/usun-zadanie.js
// @version      0.4
// @description  Usuwa tekst "Zadanie" przed prawdziwą nazwą zadania.
// @author       Jonas Aleshkevich
// @match        https://sio2.staszic.waw.pl/*
// @grant        none
// ==/UserScript==

// ↑ I will add another pages this should run on when I encounter some.

(function () {
  'use strict';

  let options = $("*:not(oioioi-message *)");
  options.each(i => {
    let o = options[i];
    if (o.text != o.innerHTML) return;  // Skip complex elements.
    o.innerHTML = o.innerHTML.replace(/^((zadanie|problem)\s+)+/gi, "");  // Be gone, you ugly piece of garbage!!
  });

})();
