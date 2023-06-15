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

  test("subtraction", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplication", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("division", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("division by zero", () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by 0");
  });
});
