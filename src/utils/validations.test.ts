import { validations } from "./validations";

describe("Validation tests", () => {
  test("input value entered to testedValue", () => {
    expect(validations.input("Armagan")).toBe(validations);
    expect(validations.testedValue).toBe("Armagan");
  });
  test("isNull property error works", () => {
    expect(
      validations.input("").isNull("Warning - Text input can't be empty")
    ).toBe(validations);
    expect(validations.results && validations.results["isNull"]).toStrictEqual({
      errorMessage: "Warning - Text input can't be empty",
    });
  });
  test("min property error works", () => {
    expect(
      validations
        .input("a")
        .min(5, "Warning - Text must be more than 5 characters")
    ).toBe(validations);
    expect(validations.results && validations.results["min"]).toStrictEqual({
      errorMessage: "Warning - Text must be more than 5 characters",
    });
  });
  test("max property error works", () => {
    expect(
      validations
        .input("123456789123456789123")
        .max(20, "Warning - Text can't be more than 20 characters")
    ).toBe(validations);
    expect(validations.results && validations.results["max"]).toStrictEqual({
      errorMessage: "Warning - Text can't be more than 20 characters",
    });
  });
  test("isNull property with right value works", () => {
    expect(
      validations.input("1").isNull("Warning - Text input can't be empty")
    ).toBe(validations);
    expect(validations.results && validations.results["isNull"]).toBe(
      undefined
    );
  });
  test("min property with right value works", () => {
    expect(
      validations
        .input("123456")
        .min(5, "Warning - Text must be more than 5 characters")
    ).toBe(validations);
    expect(validations.results && validations.results["min"]).toBe(undefined);
  });
  test("max property with right value works", () => {
    expect(
      validations
        .input("123456789123456789")
        .max(20, "Warning - Text can't be more than 20 characters")
    ).toBe(validations);
    expect(validations.results && validations.results["max"]).toBe(undefined);
  });
});
