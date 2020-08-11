/* global $, */
// console.log("Hello there, General Kenobi!");

$('.ask-away-button').on('click', function () {
  window.alert('Coming soon! This page is still under construction!')
})

var x = document.getElementById('myNavToggle')

var didScroll
var lastScrollTop = 0
var delta = 5
var navBarHeight = window.$('header').outerHeight()

console.log(navBarHeight)

function menuToggle () { // eslint-disable-line no-unused-vars
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// Activate local nav links based on scroll location on page.

$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop()
  var scrollDistanceAdjusted = scrollDistance + 5

  // Assign active class to nav links while scolling
  $('.page-section').each(function (i) {
    if ($(this).position().top <= scrollDistanceAdjusted) {
      $('.local-nav-menu a i').removeClass('fas fa-circle')
      $('.local-nav-menu a i').addClass('far fa-circle')
      $('.local-nav-menu a i').eq(i).removeClass('far fa-circle')
      $('.local-nav-menu a i').eq(i).addClass('fas fa-circle')
      $('.local-nav-menu a span').removeClass('ln-active')
      $('.local-nav-menu a span').eq(i).addClass('ln-active')
    }
  })
}).scroll()

// Activate local nav links based on mouse over.

var AlreadyActive

$('#lnl1').mouseover(function () {
  if ($('#span1').hasClass('ln-active')) {
    AlreadyActive = true
    console.log('Already active')
  } else {
    AlreadyActive = false
    console.log('Not active')
    $('#span1').addClass('ln-active')
  }
})

$('#lnl1').mouseout(function () {
  if (AlreadyActive === true) {
    // Do nothing
  } else {
    $('#span1').removeClass('ln-active')
  }
})

$('#lnl2').mouseover(function () {
  if ($('#span2').hasClass('ln-active')) {
    AlreadyActive = true
    console.log('Already active')
  } else {
    AlreadyActive = false
    console.log('Not active')
    $('#span2').addClass('ln-active')
  }
})

$('#lnl2').mouseout(function () {
  if (AlreadyActive === true) {
    // Do nothing
  } else {
    $('#span2').removeClass('ln-active')
  }
})

$('#lnl3').mouseover(function () {
  if ($('#span3').hasClass('ln-active')) {
    AlreadyActive = true
    console.log('Already active')
  } else {
    AlreadyActive = false
    console.log('Not active')
    $('#span3').addClass('ln-active')
  }
})

$('#lnl3').mouseout(function () {
  if (AlreadyActive === true) {
    // Do nothing
  } else {
    $('#span3').removeClass('ln-active')
  }
})

$('#lnl4').mouseover(function () {
  if ($('#span4').hasClass('ln-active')) {
    AlreadyActive = true
    console.log('Already active')
  } else {
    AlreadyActive = false
    console.log('Not active')
    $('#span4').addClass('ln-active')
  }
})

$('#lnl4').mouseout(function () {
  if (AlreadyActive === true) {
    // Do nothing
  } else {
    $('#span4').removeClass('ln-active')
  }
})

$('#lnl5').mouseover(function () {
  if ($('#span5').hasClass('ln-active')) {
    AlreadyActive = true
    console.log('Already active')
  } else {
    AlreadyActive = false
    console.log('Not active')
    $('#span5').addClass('ln-active')
  }
})

$('#lnl5').mouseout(function () {
  if (AlreadyActive === true) {
    // Do nothing
  } else {
    $('#span5').removeClass('ln-active')
  }
})

// Show header when scrolling up, hide when scrolling down.

$(window).scroll(function (event) {
  didScroll = true
})

setInterval(function () {
  if (didScroll) {
    hasScrolled()
    didScroll = false
  }
}, 250)

function hasScrolled () {
  var st = $(this).scrollTop()
  if (Math.abs(lastScrollTop - st) <= delta) {
    return
  }

  if (st > lastScrollTop && st > navBarHeight) {
    // Scroll down event.
    $('header').removeClass('nav-down').addClass('nav-up')
    x.className = 'navtoggle'
  } else {
    // Scroll up event.
    $('header').removeClass('nav-up').addClass('nav-down')
  }

  lastScrollTop = st
}
