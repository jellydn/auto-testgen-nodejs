import { describe, test, expect } from "vitest";

import { sum, subtract, multiply, divide } from "../index";

describe("math functions", () => {
  describe("addition", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(sum(1, 2)).toBe(3);
    });

    test("adds -1 + 2 to equal 1", () => {
      expect(sum(-1, 2)).toBe(1);
    });

    test("adds 0 + 0 to equal 0", () => {
      expect(sum(0, 0)).toBe(0);
    });

    test("adds 0.1 + 0.2 to equal 0.3 (approximately)", () => {
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });
  });

  describe("subtraction", () => {
    test("Subtracting positive numbers", () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test("Subtracting negative numbers", () => {
      expect(subtract(-3, -5)).toBe(2);
    });

    test("Subtracting zero from a number", () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test("Subtracting a number from itself", () => {
      expect(subtract(4, 4)).toBe(0);
    });

    test("Subtracting large numbers", () => {
      expect(subtract(1000000, 999999)).toBe(1);
    });

    test("Subtracting floating point numbers", () => {
      expect(subtract(5.2, 3.1)).toBeCloseTo(2.1);
    });

    test("Subtracting with scientific notation", () => {
      expect(subtract(1.2e4, 3.5e3)).toBe(8.5e3);
    });
  });

  describe("multiplication", () => {
    test("should multiply two positive numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test("should multiply two negative numbers", () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test("should multiply one positive and one negative number", () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    test("should multiply with zero", () => {
      expect(multiply(0, 3)).toBe(0);
    });

    test("should multiply with one", () => {
      expect(multiply(1, 3)).toBe(3);
    });

    test("should multiply with decimal numbers", () => {
      expect(multiply(1.5, 3)).toBe(4.5);
    });
  });

  describe("division", () => {
    test("should throw error if b is 0", () => {
      expect(() => {
        divide(10, 0);
      }).toThrowError("Cannot divide by 0");
    });

    test("should return expected result for positive values", () => {
      expect(divide(6, 2)).toBe(3);
    });

    test("should return expected result for negative values", () => {
      expect(divide(-4, 2)).toBe(-2);
      expect(divide(4, -2)).toBe(-2);
      expect(divide(-4, -2)).toBe(2);
    });

    test("should return expected result for decimal values", () => {
      expect(divide(5, 2)).toBe(2.5);
    });
  });
});
