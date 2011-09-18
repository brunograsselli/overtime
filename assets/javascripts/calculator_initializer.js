$(document).ready(function () {
  $("#arrived_at").val(window.localStorage.time);
  var calculator = new Calculator();
  new CalculatorController(calculator);
});

