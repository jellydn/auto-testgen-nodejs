// BEGIN: 4f7a8c7f9b5d
import { describe, it, expect } from "vitest";

import { calculateFee } from "./fee";

describe("calculateFee", () => {
  it("should calculate fixed amount fee correctly", () => {
    const feeSetting = {
      collectionType: "FIXED_AMOUNT",
      feeValue: 10,
    };
    const fee = calculateFee({ feeSetting });
    expect(fee).toEqual(10);
  });

  it("should calculate per thousand fee correctly", () => {
    const feeSetting = {
      collectionType: "PER_THOUSAND",
      feeValue: 50,
    };
    const tokenQty = 1000;
    const fee = calculateFee({ feeSetting, tokenQty });
    expect(fee).toEqual(50);
  });

  it("should calculate percentage fee correctly", () => {
    const feeSetting = {
      collectionType: "PERCENTAGE",
      feeValue: 2.5,
    };
    const totalAmount = 1000;
    const fee = calculateFee({ feeSetting, totalAmount });
    expect(fee).toEqual(25);
  });

  it("should throw an error if feeValue is greater than 100 for percentage collection type", () => {
    const feeSetting = {
      collectionType: "PERCENTAGE",
      feeValue: 150,
    };
    const totalAmount = 1000;
    expect(() => calculateFee({ feeSetting, totalAmount })).toThrowError(
      "feeValue must be less than 100"
    );
  });

  it("should throw an error if feeValue is less than 0 for percentage collection type", () => {
    const feeSetting = {
      collectionType: "PERCENTAGE",
      feeValue: -10,
    };
    const totalAmount = 1000;
    expect(() => calculateFee({ feeSetting, totalAmount })).toThrowError(
      "feeValue must be greater than 0"
    );
  });

  it("should throw an error if totalAmount is not provided for percentage collection type", () => {
    const feeSetting = {
      collectionType: "PERCENTAGE",
      feeValue: 2.5,
    };
    expect(() => calculateFee({ feeSetting })).toThrowError(
      "totalAmount is required"
    );
  });

  it("should throw an error if tokenQty is not provided for per thousand collection type", () => {
    const feeSetting = {
      collectionType: "PER_THOUSAND",
      feeValue: 50,
    };
    expect(() => calculateFee({ feeSetting })).toThrowError(
      "tokenQty is required"
    );
  });

  it("should throw an error if an invalid collection type is provided", () => {
    const feeSetting = {
      collectionType: "INVALID_TYPE",
      feeValue: 10,
    };
    expect(() => calculateFee({ feeSetting })).toThrowError(
      "Invalid collection type: INVALID_TYPE"
    );
  });
});
// END: 4f7a8c7f9b5d
