//Back-end logic
var factorial = function(number) {
  if (number === 0) {
    return 1;
  // } if else (number === NaN) {
  //   return "ENTER A NUMBER";
  } else if (number < 0) {
    return -1;
  } else {
    (number !== 0)
    return (number * factorial(number-1));
  }


};

//front-end logic
$(document).ready(function() {
  $("form#factCalc").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".fact").text(result);

    $("#result").show();
  });
});
