var CalculatorController = function(calculator) {
  var bindCalcButton = function() {
    $("#calc_button").click(calcTimeToLeave);
  };

  var calcTimeToLeave = function() {
    $("#min_time").html(calculator.minTime($("#arrived_at").val()));
    $("#regular_time").html(calculator.regularTime($("#arrived_at").val()));
    $("#max_time").html(calculator.maxTime($("#arrived_at").val()));
  };

  bindCalcButton();
}
