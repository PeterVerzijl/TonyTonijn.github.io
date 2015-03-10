$(document).ready(function () {

  initialize();

  // Animate pulse
  $(this).click(function(e) {
    var x = e.clientX;
    var y = e.clientY;
    createPulse( x, y );
  });
});

$( window ).resize(function() {
  initialize();
});

// Centers and recalculates screen
var initialize = function() {

  // Resize
  $('.face').css({
    height : $('.face').width()
  });

  // Center
  $('.circle').css({
    marginLeft: -$('.circle').width()/2,
    marginTop: -$('.circle').height()/2
  });
  // Center .center class
  $('.center').css({
    marginLeft: -$('.center').width()/2
  });
}

// Creates a pulse at x,y
var createPulse = function(x, y) {

  var circle = $("<div class='circle'></div>");
  $('body').append(circle)
  circle.css({
    top : y,
    left : x,
    'z-index' : 0
  })
  .animate({
    width : 4000,
    height : 4000,
    marginLeft : -4000/2,
    marginTop : -4000/2
  }, 1000, function() {
    $(this).remove();
  });
}
