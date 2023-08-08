/**
 * Calculates the fee base on the collection type.
 */
export function calculateFee({
  feeSetting,
  totalAmount,
  tokenQty,
}: {
  feeSetting: {
    collectionType: 'FIXED_AMOUNT' | 'PER_THOUSAND' | 'PERCENTAGE' | Omit<string, 'FIXED_AMOUNT' | 'PER_THOUSAND' | 'PERCENTAGE'>;
    feeValue: number;
  };
  totalAmount?: number;
  tokenQty?: number;
}) {
  let fee = 0;
  switch (feeSetting.collectionType) {
    case 'FIXED_AMOUNT':
      fee = feeSetting.feeValue;
      break;
    case 'PER_THOUSAND':
      if (!tokenQty) throw new Error('tokenQty is required');
      fee = (feeSetting.feeValue / 1000) * tokenQty;
      break;
    case 'PERCENTAGE':
      if (!totalAmount) throw new Error('totalAmount is required');
      fee = (feeSetting.feeValue / 100) * totalAmount;
      break;
    default:
      throw new Error(`Invalid collection type: ${feeSetting.collectionType}`);
  }

  return fee
}
