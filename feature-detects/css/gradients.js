/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  }, {
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  }, {
    "name": "W3C Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/
import Modernizr from '../../src/Modernizr.js';
import contains from '../../src/contains.js';
import prefixes from '../../src/prefixes.js';
import createElement from '../../src/createElement.js';

Modernizr.addTest('cssgradients', function() {

  var str1 = 'background-image:';
  var str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));';
  var css = '';
  var angle;

  for (var i = 0, len = prefixes.length - 1; i < len; i++) {
    angle = (i === 0 ? 'to ' : '');
    css += str1 + prefixes[i] + 'linear-gradient(' + angle + 'left top, #9f9, white);';
  }

  if (Modernizr._config.usePrefixes) {
    css += str1 + '-webkit-' + str2;
  }

  var elem = createElement('a');
  var style = elem.style;
  style.cssText = css;

  // IE6 returns undefined so cast to string
  return contains('' + style.backgroundImage, 'gradient');
});

export default Modernizr.cssgradients
