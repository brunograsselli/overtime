describe("CalculatorController", function () {
  var fakeCalculator;

  beforeEach(function () {
    fakeCalculator = {
      minTime: function (time) {
        if (time == "10:30") {
          return "20:30";
        }
      },
      regularTime: function (time) {
        if (time == "10:30") {
          return "21:30";
        }
      },
      maxTime: function (time) {
        if (time == "10:30") {
          return "22:30";
        }
      }
    }

    $("body").append("<div id='test'/>");

    $("#test").append("<a id='calc_button' />");
    $("#test").append("<input id='arrived_at' />");
    $("#test").append("<div id='min_time' />");
    $("#test").append("<div id='regular_time' />");
    $("#test").append("<div id='max_time' />");

    var calculatorController = new CalculatorController(fakeCalculator);
    $("#arrived_at").val("10:30");
  });

  afterEach(function () {
    $("#test").remove();
  });

  describe("when initialize", function () {
    describe("and arrived_at input is empty", function () {
      it("should not calculate time", function () {
        $("#arrived_at").val("");
        $("#min_time").val("");
        new CalculatorController(fakeCalculator);
        expect($("#min_time").html()).toEqual("");
      });
    });

    describe("and arrived_at input is filled in", function () {
      it("should calculate time", function () {
        $("#arrived_at").val("10:30");
        $("#min_time").val("");
        new CalculatorController(fakeCalculator);
        expect($("#min_time").html()).toEqual("20:30");
      });
    });
  });

  describe("when user clicks into calc button", function () {
    it("should calculate the minimum time", function () {
      $("#calc_button").click();
      expect($("#min_time").html()).toEqual("20:30");
    });

    it("should calculate the regular time", function () {
      $("#calc_button").click();
      expect($("#regular_time").html()).toEqual("21:30");
    });

    it("should calculate the maximum time", function () {
      $("#calc_button").click();
      expect($("#max_time").html()).toEqual("22:30");
    });

    it("should store the time", function () {
      delete window.localStorage.overtime;
      $("#calc_button").click();
      expect(window.localStorage.time).toEqual("10:30");
    });
  });
});
