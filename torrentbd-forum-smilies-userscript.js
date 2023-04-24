// ==UserScript==
// @name         TorrentBD Forum Smilies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shoutbox emoji/smilies in forum reply
// @author       Khaled
// @match        https://www.torrentbd.net/forums.php*
// @icon         https://www.torrentbd.net/themes/material/static/favicon/favicon-32x32.png
// @grant        none
// @run-at document-end
// ==/UserScript==

//Magic Happens Here
var injectSmilies = function () {
    const emojiOutlineElm = document.getElementById("smilies-outline");
    if (emojiOutlineElm) return;

    //Inject smilies container
    $(`<div id="smilies-outline" class="col s12 toggle-outline" style="padding: 1.5rem">
                <div class="loading-container">
                    <div class="loader-dzg"></div>
                </div>
            </div>`).insertAfter(".col.s12.center");

    //Inject smilies toggle button
    $(`<span class="btn orange darken-2 mb-5 toggle-trigger"
             onclick="toggleSmilies()"
             title="Smilies &amp; Stickers">
                   <i class="material-icons">mood</i>
          </span>`
     ).insertAfter(".btn.blue.darken-3.mb-5.toggle-trigger");

    //Additional whitespace as a margin
    $(".btn.blue.darken-3.mb-5.toggle-trigger").after(" ");

    //Modify the function that injects the emoji in textbox
    //So it actually can add emoji to corrct textbox
    smiliefy = function (gesture) {
        $('#forum-reply-text').val($('#forum-reply-text').val() + gesture).focus();
    }


};

(function () {
    "use strict";
    //Haxx to use embedded jQuery
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + injectSmilies.toString() + ")();";
    document.body.appendChild(script);
})();
