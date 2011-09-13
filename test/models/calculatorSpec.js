describe("Calculator", function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  describe("#minTime", function () {
    it("should return initial time plus 9:33", function () {
      expect(calculator.minTime("09:00")).toEqual("18:33");
    });
  });

  describe("#regularTime", function () {
    it("should return initial time plus 9:48", function () {
      expect(calculator.regularTime("09:00")).toEqual("18:48");
    });
  });

  describe("#maxTime", function () {
    it("should return initial time plus 10:03", function () {
      expect(calculator.maxTime("09:00")).toEqual("19:03");
    });
  });
});
