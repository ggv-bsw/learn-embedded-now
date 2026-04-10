// Conversion rate: 1 EUR = 20 MDL
const MDL_TO_EUR_RATE = 20;

export const mdlToEur = (mdlAmount: number): string => {
  return (mdlAmount / MDL_TO_EUR_RATE).toFixed(2);
};
