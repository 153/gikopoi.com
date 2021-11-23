// ==UserScript==
// @name         Hidden Gikos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script makes all the hidden gikopoi characters visible in the selection screen and removes the message indicating that they are secret.
// @author       dinghy
// @match        *://gikopoipoi.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var elems = document.getElementsByTagName('label');
    for (var i = 0; i < elems.length; i++) {
        if(elems[i].style.display == "none")
        {
            elems[i].style.display = "block";
            elems[i].style.fontSize = 0;
        };
}
})();
