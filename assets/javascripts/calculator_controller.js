var CalculatorController = function(calculator) {
  var bindCalcButton = function() {
    $("form").submit(function(event) {
      event.preventDefault();
      calcTimeToLeave();
    });
  };

  var setTimer = function(e, message) {
    var time = e.html().split(":");
    var future = new Date();
    future.setHours(time[0]);
    future.setMinutes(time[1]);
    
    setTimeout(function() {
       alert(message);
    }, future.getTime() - new Date().getTime());
  };

  var calcTimeToLeave = function() {
    var arrivedAt = $("#arrived_at").val();
    window.localStorage.time = arrivedAt;

    $("#min_time").html(calculator.minTime(arrivedAt));
    $("#regular_time").html(calculator.regularTime(arrivedAt));
    $("#max_time").html(calculator.maxTime(arrivedAt));
    
    setTimer($("#min_time"), "Hora mínima");
    setTimer($("#regular_time"), "Hora normal");
    setTimer($("#max_time"), "Hora máxima");
  };

  if ($("#arrived_at").val() != "") {
    calcTimeToLeave();
  }

  bindCalcButton();
}
