describe("CalculatorController", function () {
  var fakeCalculator;

  beforeEach(function () {
    fakeCalculator = {
      setBaseTime: function(value){
      },
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

    $("body").append("<div id='test'><form></form></div>");

    $("form").append("<input type='submit' id='calc_button' />");
    $("form").append("<input id='arrived_at' />");
    $("form").append("<div id='min_time' />");
    $("form").append("<div id='regular_time' />");
    $("form").append("<div id='max_time' />");
    $("form").append("<p>Horário base: <span id='base_time'></span> <a href='#' id='edit_base_time'>Alterar</a></p>");

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

  describe("when user submits the form", function () {
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
      delete window.localStorage.time;
      $("#calc_button").click();
      expect(window.localStorage.time).toEqual("10:30");
    });
  });

  describe("when user clicks on edit", function () {
    describe("when link is Editar", function () {
      beforeEach(function () {
        $("#edit_base_time").html("Alterar");
      });

      it("should change the base time html by an input", function () {
        window.localStorage.baseTime = "9:00";
        $("#edit_base_time").click();
        expect($("#base_time input").val()).toEqual("9:00");
      });

      it("should change the edit link by an ok link", function () {
        $("#edit_base_time").click();
        expect($("#edit_base_time").html()).toEqual("Ok");
      });
    });

    describe("when link is Ok", function () {
      beforeEach(function () {
        $("#edit_base_time").html("Ok");
        $("#base_time").html("<input type='text' value='13:00' id='base_time_input' />");
      });

      it("should change the input by the base time", function () {
        window.localStorage.baseTime = "9:00";
        $("#edit_base_time").click();
        expect($("#base_time").html()).toEqual("13:00");
      });

      it("should change the ok link by an edit link", function () {
        $("#edit_base_time").click();
        expect($("#edit_base_time").html()).toEqual("Alterar");
      });

      it("should update the base time", function () {
        spyOn(fakeCalculator, 'setBaseTime')
        $("#edit_base_time").click();
        expect(fakeCalculator.setBaseTime).toHaveBeenCalledWith("13:00");
      });
    });
  });
});
