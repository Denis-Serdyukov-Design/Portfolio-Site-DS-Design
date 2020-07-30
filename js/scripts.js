console.log("Hello there, General Kenobi!");

$(".ask-away-button").on("click", function() {
  alert("Ask Away button has been clicked!")
});

var x = document.getElementById('myNavToggle');

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navBarHeight = $('header').outerHeight();

console.log (navBarHeight);


function menuToggle () {
  //alert("Menu has been clicked!");
  // var x = document.getElementById('myNavToggle');
  if (x.className === 'navtoggle') {
    console.log ("Expanding.");
    x.className += ' responsive';
  } else {
    console.log ("Collapsing.");
    x.className = 'navtoggle';
  }
}


//Show header when scrolling up, hide when scrolling down.

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function(){
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop-st) <= delta)
    return;

  if (st > lastScrollTop && st > navBarHeight) {
    //Scroll down event.
    $('header').removeClass('nav-down').addClass('nav-up');
    $('main').removeClass('add-space').addClass('no-space');
    x.className = 'navtoggle';
  } else {
    //Scroll up event.
    $('header').removeClass('nav-up').addClass('nav-down');
    $('main').removeClass('no-space').addClass('add-space');
  }

  lastScrollTop = st;
}
