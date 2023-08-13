import { calculateFee } from '../../../../src/fee';

describe('calculateFee', () => {
  it('calculates FIXED_AMOUNT correctly', () => {
    const result = calculateFee({ feeSetting: { collectionType: 'FIXED_AMOUNT', feeValue: 100 } });
    expect(result).toBe(100);
  });

  it('throws error when PER_THOUSAND is missing tokenQty', () => {
    expect(() => {
      calculateFee({ feeSetting: { collectionType: 'PER_THOUSAND', feeValue: 100 } });
    }).toThrowError(new Error('tokenQty is required')); 
  });

  it('calculates PER_THOUSAND correctly', () => {
    const result = calculateFee({ feeSetting: { collectionType: 'PER_THOUSAND', feeValue: 100 }, tokenQty: 2000 });
    expect(result).toBe(200);  
  });

  it('throws error if PERCENTAGE has feeValue above 100', () => {
    expect(() => {
      calculateFee({ feeSetting: { collectionType: 'PERCENTAGE', feeValue: 101 } });
    }).toThrowError(new Error('feeValue must be less than 100')); 
  });

  it('throws error if PERCENTAGE has feeValue below 0', () => {
    expect(() => {
      calculateFee({ feeSetting: { collectionType: 'PERCENTAGE', feeValue: -1 } });
    }).toThrowError(new Error('feeValue must be greater than 0')); 
  });

  it('throws error when PERCENTAGE is missing totalAmount', () => {
    expect(() => {
      calculateFee({ feeSetting: { collectionType: 'PERCENTAGE', feeValue: 50 } });
    }).toThrowError(new Error('totalAmount is required')); 
  });

  it('calculates PERCENTAGE correctly', () => {
    const result = calculateFee({ feeSetting: { collectionType: 'PERCENTAGE', feeValue: 50 }, totalAmount: 200 });
    expect(result).toBe(100);  
  });

  it('throws error on invalid collection type', () => {
    expect(() => {
      calculateFee({ feeSetting: { collectionType: 'INVALID_TYPE', feeValue: 100 } });
    }).toThrowError(new Error(`Invalid collection type: INVALID_TYPE`)); 
  });
});