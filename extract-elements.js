/*
 Go to: https://developer.mozilla.org/en-US/docs/HTML/Element

 Copy the script below in the dev tools console to get a list of
 elements.
 */

console.log(
    Array.prototype.slice.call(document.querySelectorAll('.index li > code >  a')).map(function (el) {
        return "'" + el.getAttribute('title').replace(/^</, '').replace(/>$/, '') + "'";
    }).join(', ')
);
