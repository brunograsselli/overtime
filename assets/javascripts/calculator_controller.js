var CalculatorController = function(calculator) {
  var bindCalcButton = function() {
    $("#calc_button").click(calcTimeToLeave);
  };

  var calcTimeToLeave = function() {
    var arrivedAt = $("#arrived_at").val();
    window.localStorage.time = arrivedAt;

    $("#min_time").html(calculator.minTime(arrivedAt));
    $("#regular_time").html(calculator.regularTime(arrivedAt));
    $("#max_time").html(calculator.maxTime(arrivedAt));
  };

  bindCalcButton();
}
