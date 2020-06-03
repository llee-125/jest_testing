const { add, minus, multiply, divide, power } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => add("2", 2)).toThrowError();
    });

    it("Should throw an error if 2nd argument isn't a number", () => {
      expect(() => add(2, "2")).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return 1 argument minus the 2nd argument", () => {
      expect(minus(2, 2)).toBe(0);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => minus("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a number", () => {
      expect(() => minus(2, "2")).toThrowError();
    });
  });
});

describe("multiply", () => {
  describe("Success", () => {
    it("Should return 1 argument multiplied by the other argument", () => {
      expect(multiply(2, 2)).toBe(4);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => multiply("2", 2)).toThrowError();
    });
    it("Should throw an error if the 2nd argument isn't a number", () => {
      expect(() => multiply(2, "2")).toThrowError();
    });
  });
});

describe("divide", () => {
  describe("Success", () => {
    it("Should return 1 argument divided by the second argument", () => {
      expect(divide(2, 2)).toBe(1);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => divide("2", 2)).toThrowError();
    });
    it("Should throw an error if the 2nd argument isn't a number", () => {
      expect(() => divide(2, "2")).toThrowError();
    });
  });
});

describe("power", () => {
  describe("Success", () => {
    it("Should return 1 argument divided by the second argument", () => {
      expect(power(2, 2)).toBe(4);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a number", () => {
      expect(() => power("2", 2)).toThrowError();
    });
    it("Should throw an error if the 2nd argument isn't a number", () => {
      expect(() => power(2, "2")).toThrowError();
    });
  });
});
