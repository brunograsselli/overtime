$(document).ready(function () {
  $("#arrived_at").val(window.localStorage.time);
  var baseTime = window.localStorage.baseTime || "09:48";
  $("#base_time").html(baseTime);
  var calculator = new Calculator();
  calculator.setBaseTime(baseTime);
  new CalculatorController(calculator);
  $("#arrived_at").focus();
});

