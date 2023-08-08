/**
 * Sum
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * subtract.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * multiply.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * divide.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by 0");
  }
  return a / b;
}

