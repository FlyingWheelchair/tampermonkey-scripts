// ==UserScript==
// @name         Expedia Checkbox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.expedia.com/Flights
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @grant        none
// ==/UserScript==

$( document ).ready(function() {
    console.log( "ready!" );
    var newHtml='<label id="advanced-flight-wheelchair-label" class="check" for="advanced-flight-wheelchair"><input id="advanced-flight-wheelchair" class="gcw-toggle-checkbox gcw-show-with-value gcw-storeable gcw-wheelchair-checkbox" type="checkbox" data-gcw-storeable-name="gcw-flights-wheelchair" name="" autocomplete="off" aria-label="Flying with Wheelchair"><span class="inline-label non-stop-and-refundable-check-boxes-in-high-contrast-mode">&nbsp;Flying with Wheelchair</span></label>';
    $("#advanced-flight-refundable-label-flp").after(newHtml);
    $("#advanced-flight-wheelchair").change(function() {
        if(this.checked) {
            var myWindow = window.open("http://flyingwheelchair.com/#signin", "_blank", "toolbar=no,location=no,menubar=no,scrollbars=yes");
        }
    });
});
