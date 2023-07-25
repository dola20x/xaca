import { isNaN } from 'lodash';

export class NumberUtils {
  // Format money and number
  static formatMoney(number: number): string {
    return Math.round(number).toLocaleString('en-GB');
  }

  static convertQueryParam = (param: string | number | undefined | null): number | null => {
    const numParam = Number(param);
    return typeof numParam === 'number' && !isNaN(numParam) ? numParam : null;
  };
}
