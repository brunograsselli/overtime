describe("Calculator", function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  describe("setBaseTime", function () {
    it("should store the time on local store", function () {
      window.localStorage.baseTime = null;
      calculator.setBaseTime("10:00");
      expect(window.localStorage.baseTime).toEqual("10:00");
    });
  });

  describe("when base time is 9:48", function () {
    beforeEach(function () {
      calculator.setBaseTime("9:48");
    });

    describe("#minTime", function () {
      it("should return initial time plus 9:33", function () {
        expect(calculator.minTime("09:00")).toEqual("18:33");
      });

      it("should accept h:mm format", function () {
        expect(calculator.minTime("9:00")).toEqual("18:33");
      });
    });

    describe("#regularTime", function () {
      it("should return initial time plus 9:48", function () {
        expect(calculator.regularTime("09:00")).toEqual("18:48");
      });

      it("should accept h:mm format", function () {
        expect(calculator.regularTime("9:00")).toEqual("18:48");
      });
    });

    describe("#maxTime", function () {
      it("should return initial time plus 10:03", function () {
        expect(calculator.maxTime("09:00")).toEqual("19:03");
      });

      it("should accept h:mm format", function () {
        expect(calculator.maxTime("9:00")).toEqual("19:03");
      });
    });
  });

  describe("when base time is 9:00", function () {
    beforeEach(function () {
      calculator.setBaseTime("9:00");
    });

    describe("#minTime", function () {
      it("should return initial time plus 9:33", function () {
        expect(calculator.minTime("09:00")).toEqual("17:45");
      });

      it("should accept h:mm format", function () {
        expect(calculator.minTime("9:00")).toEqual("17:45");
      });
    });

    describe("#regularTime", function () {
      it("should return initial time plus 9:48", function () {
        expect(calculator.regularTime("09:00")).toEqual("18:00");
      });

      it("should accept h:mm format", function () {
        expect(calculator.regularTime("9:00")).toEqual("18:00");
      });
    });

    describe("#maxTime", function () {
      it("should return initial time plus 10:03", function () {
        expect(calculator.maxTime("09:00")).toEqual("18:15");
      });

      it("should accept h:mm format", function () {
        expect(calculator.maxTime("9:00")).toEqual("18:15");
      });
    });
  });
});
