export const BUY_ONE = 'BUY_ONE';
export const EAT_ONE = 'EAT_ONE';

export function buy(number) {
  return { type: 'BUY_ONE', number };
}

export function eat(number) {
  return { type: 'EAT_ONE', number };
}
