import { describe, test, expect } from "vitest";

import { calculateFee } from "../fee";


describe('calculateFee function', () => {
  const feeSetting = {
    collectionType: "",
    feeValue: 1000
  };
  test('should correctly calculate fixed amount fee', () => {
    feeSetting.collectionType = "FIXED_AMOUNT";
    expect(calculateFee({ feeSetting })).toBe(1000);
  });

  test('should correctly calculate per thousand fee', () => {
    feeSetting.collectionType = "PER_THOUSAND";
    feeSetting.feeValue = 1; // 1 cent per thousand
    expect(calculateFee({ feeSetting, tokenQty: 5000 })).toBe(5);

    expect(() => calculateFee({ feeSetting })).toThrow('tokenQty is required');
  });

  test('should correctly calculate percentage fee', () => {
    feeSetting.collectionType = "PERCENTAGE";
    feeSetting.feeValue = 3; // 1%
    expect(calculateFee({
      feeSetting,
      totalAmount: 10000 // ten thousand usd
    })).toBe(300); // three hundred usd

    expect(() => calculateFee({ feeSetting })).toThrow('totalAmount is required');
  });

  test('should throw error on invalid collection type', () => {
    feeSetting.collectionType = "INVALID_TYPE";
    expect(() => calculateFee({ feeSetting })).toThrow(`Invalid collection type: ${feeSetting.collectionType}`);
  });
});
