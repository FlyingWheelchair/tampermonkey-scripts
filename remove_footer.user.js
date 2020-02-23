// ==UserScript==
// @name         Remove footer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @match        http://ec2-3-18-105-73.us-east-2.compute.amazonaws.com/
// @match        http://flyingwheelchair.com/*
// @grant        none
// ==/UserScript==

$( document ).ready(function() {
    $("#200525395560049").on('load',function() {
        console.log( "ready!" );
        $("#200525395560049").contents().find(".formFooter").remove();
    });
});
