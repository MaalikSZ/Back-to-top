// ==UserScript==
// @name         Przycisk "Wróć na górę"/"Back to Top" Button
// @namespace    https://github.com/MaalikSZ
// @version      1.0
// @description  Dodaje przycisk "Wróć na górę" na wszystkich stronach / Adds a "Back to Top" button on all pages
// @author       Szymon Wasik
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        #scrollTopButton {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px;
            z-index: 9999;
            display: none;
        }
    `);

    var scrollButton = document.createElement('button');
    scrollButton.id = 'scrollTopButton';
    var language = document.documentElement.lang.toLowerCase();

    if (language === 'pl') {
        scrollButton.textContent = 'Wróć na górę';
    } else {
        scrollButton.textContent = 'Back to Top';
    }

    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})();