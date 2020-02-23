// ==UserScript==
// @name        Hack Bing
// @namespace   https://bing.com
// @include     *
// @version     1
// @require     http://code.jquery.com/jquery-3.4.1.min.js
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';

    var deleteRso = function(el) {
        $(".b_ans").remove();
        var element = document.getElementsByClassName("b_algo")[0];
        element.innerHTML = `<li class="b_algo" data-bm="7">
          <h2>
          <a href="http://flyingwheelchair.com" target="_blank">Flying Wheelchair</a>
          </h2>
          <div class="b_caption">
          <div class="b_attribution" u="1|5061|4790864352183986|vR_1Fg_BWlaComZFvPXDkbdnf_9bj6-3">
          <cite>https://flyingwheelchair.com</cite>
          <a href="#" aria-label="Actions for this site" aria-haspopup="true" aria-expanded="false" role="button">
          <span class="c_tlbxTrg">
          <span class="c_tlbxTrgIcn sw_ddgn"></span>
          <span class="c_tlbxH" h="BASE:CACHEDPAGEDEFAULT" k="SERP,5149.1"></span>
          </span></a></div><p>Flying with your wheelchair made easy.</p></div></li>`;
    }

    var checkPageLoadedThenRun = function(func) {
        document.addEventListener('readystatechange', function(e) {
            if (document.readyState == 'complete') {
                func();
            }
        });
    }

    checkPageLoadedThenRun(deleteRso);
})();
