var CalculatorController = function(calculator) {
  var bindCalcButton = function() {
    $("form").submit(function(event) {
      event.preventDefault();
      calcTimeToLeave();
    });
  };

  var bindEditBaseTimeLink = function() {
    $("#edit_base_time").click(function(event) {
      event.preventDefault();

      if ($(this).html() == "Alterar") {
        $("#base_time").html("<input type='time' value='" + window.localStorage.baseTime + "' id='base_time_input' class='mini' />");
        $("#edit_base_time").html("Ok");
      } else {
        var baseTime = $("#base_time_input").val();
        calculator.setBaseTime(baseTime);
        $("#base_time").html(baseTime);
        $("#edit_base_time").html("Alterar");
      }
    });
  };

  var calcTimeToLeave = function() {
    var arrivedAt = $("#arrived_at").val();
    window.localStorage.time = arrivedAt;

    $("#min_time").html(calculator.minTime(arrivedAt));
    $("#regular_time").html(calculator.regularTime(arrivedAt));
    $("#max_time").html(calculator.maxTime(arrivedAt));
  };

  if ($("#arrived_at").val() != "") {
    calcTimeToLeave();
  }

  bindCalcButton();
  bindEditBaseTimeLink();
}
