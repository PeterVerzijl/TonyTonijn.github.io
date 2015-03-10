$(document).ready(function () {

  // Create pulse at mouse position
  $(this).click(function(e) {
    var x = e.clientX;
    var y = e.clientY;
    createPulse( x, y );
  });
  /* Mobile & IOS Chrome */
  $(this).on("tap", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    createPulse( x, y );
  });
  /* IOS safari */
  $(this).on("touchstart", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    createPulse( x, y );
  });
});

$( window ).resize(function() {

});

// Creates a pulse at x,y
var createPulse = function(x, y) {

  var circle = $("<div class='circle animate'></div>");
  $('body').append(circle)
  circle.css({
    top : y,
    left : x,
    'z-index' : 0
  }).bind('oanimationend animationend webkitAnimationEnd', function() {
    $(this).remove();
  });
}
