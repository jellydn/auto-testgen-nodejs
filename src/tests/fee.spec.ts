import { describe, test, expect } from "vitest";

import { calculateFee } from "../fee";

describe("calculateFee()", () => {
  test("calculateFee() should throw error when feeSetting.collectionType is invalid", () => {
    const fn = () =>
      calculateFee({
        feeSetting: { collectionType: "INVALID_TYPE", feeValue: 10 },
        totalAmount: 100,
        tokenQty: 10,
      });
    expect(fn).toThrowError("Invalid collection type: INVALID_TYPE");
  });

  test("calculateFee() should process FIXED_AMOUNT correctly", () => {
    const fee = calculateFee({
      feeSetting: { collectionType: "FIXED_AMOUNT", feeValue: 10 },
      totalAmount: 100,
      tokenQty: 10,
    });
    expect(fee).toBe(10);
  });

  test("calculateFee() should throw error when tokenQty is missing from PER_THOUSAND", () => {
    const fn = () =>
      calculateFee({
        feeSetting: { collectionType: "PER_THOUSAND", feeValue: 10 },
        totalAmount: 100,
      });
    expect(fn).toThrowError("tokenQty is required");
  });

  test("calculateFee() should process PER_THOUSAND correctly", () => {
    const fee = calculateFee({
      feeSetting: { collectionType: "PER_THOUSAND", feeValue: 10 },
      totalAmount: 100,
      tokenQty: 10,
    });
    expect(fee).toBe(0.1);
  });

  test("calculateFee() should throw error when feeValue exceeds 100 in PERCENTAGE", () => {
    const fn = () =>
      calculateFee({
        feeSetting: { collectionType: "PERCENTAGE", feeValue: 101 },
        totalAmount: 100,
      });
    expect(fn).toThrowError("feeValue must be less than 100");
  });

  test("calculateFee() should throw error when feeValue is less than 0 in PERCENTAGE", () => {
    const fn = () =>
      calculateFee({
        feeSetting: { collectionType: "PERCENTAGE", feeValue: -1 },
        totalAmount: 100,
      });
    expect(fn).toThrowError("feeValue must be greater than 0");
  });

  test("calculateFee() should throw error when totalAmount is missing from PERCENTAGE", () => {
    const fn = () =>
      calculateFee({
        feeSetting: { collectionType: "PERCENTAGE", feeValue: 10 },
      });
    expect(fn).toThrowError("totalAmount is required");
  });

  test("calculateFee() should process PERCENTAGE correctly", () => {
    const fee = calculateFee({
      feeSetting: { collectionType: "PERCENTAGE", feeValue: 10 },
      totalAmount: 100,
    });
    expect(fee).toBe(10);
  });
});
