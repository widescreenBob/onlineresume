// Font Loading technique
/*https://www.bramstein.com/writing/web-font-loading-patterns.html*/

var oswald = new FontFaceObserver('Oswald');
// Added to the html element. 
var html = document.documentElement;

// This is the implementation of the technique.
oswald.load().then(function () {
  html.classList.remove('fonts-loading');
  html.classList.add('fonts-loaded');
}).catch(function () {
  html.classList.remove('fonts-loading');
  html.classList.add('fonts-failed');
});

var $showMore = $('.js-extra-info');
var extraInfo = '.experience-item__extra-info';
var $printMe =$('.js-print');

$showMore.on('click', function(){
  $td= $(this);
  $td.toggleClass( "js-open" );
})

$printMe.on('click', function() {
  window.print();
})